CI setup for a .net 6 application with a React frontend - the extremely short version

Focusing mainly on the backend here and let's pretend that we can't use Azure functions and AWS lambda due to high frequency of saving data and complex business logic.

Code will be maintained on Github with main branch needing to be passing tests. Pull requests are done to ensure that at least two developers have had look at the same code. Development branched will be used for features and directory and file structure will be feature driven to prevent conflicting merges as much as possible.

Linting:
When writing the React frontend, we run linting tools, eslint and prettier, on our code to make sure we are using the language correctly. We can setup our ide or code editor to fix linting on save. For .net we can use CSharpier for Prettier like experience or Code Maid, FxCop or other VS / Rider plugins to handle code formatting. Along with Resharper this will ensure the quality of our code along with following CLEAN.

Testing:
Testing as an afterthought is a bad idea but so we will go with TDD, not investing in testing leads to technical debt. We can use testing libraries like Moq, NUnit for .net, and implement each feature through integration tests. Frontend unit tests for React can be written using jest along with integration testing. DI will be used for .net to help with testing. We can also run integration tests in using docker to have easier environment setup with proper configuration and mirroring production as much as possible.

Building/Deployment:
The application will be build in docker containers that are pushed to docker hub, if tests pass, and then we could have ansible scripts in place to automate deployment for load balancer, migrations, frontend and backend seperately on a DigitalOcean Droplet. This way we can also create a staging environment, without any manual work except for configuration of course. We could also use something like AWS Elastic Beanstalk for automated deployment in a more painless procedure as "Elastic Beanstalk automatically handles the deployment details of capacity provisioning, load balancing, auto-scaling, and application health monitoring". The solution will be cloud based the main difference is with how the infrastructure of the deployment is handled.