https://12factor.net/

## I. Codebase --------------------------

# One codebase tracked in revision control, many deploys

There is always a one-to-one correlation between the codebase and the app:

If there are multiple codebases, it’s not an app – it’s a distributed system. Each component in a distributed system is an app, and each can individually comply with twelve-factor.
Multiple apps sharing the same code is a violation of twelve-factor. The solution here is to factor shared code into libraries which can be included through the dependency manager.

## II. Dependencies --------------------------

# Explicitly declare and isolate dependencies

A twelve-factor app never relies on implicit existence of system-wide packages.
i.e. globally installled package should not be used.

## III. Config --------------------------

# Store config in the environment

The twelve-factor app stores config in environment variables

## IV. Backing services --------------------------

# Treat backing services as attached resources

The code for a twelve-factor app makes no distinction between local and third party services.

services should be replacable / swappable.

## V. Build, release, run --------------------------

# Strictly separate build and run stages

The twelve-factor app uses strict separation between the build, release, and run stages.
must maintain relese versions

## VI. Processes --------------------------

# Execute the app as one or more stateless processes

Twelve-factor processes are stateless and share-nothing.

heap variables should nt be shared in multiple requests except cache.

## VII. Port binding --------------------------

# Export services via port binding

The twelve-factor app is completely self-contained and does not rely on runtime injection of a webserver into the execution environment to create a web-facing service. The web app exports HTTP as a service by binding to a port, and listening to requests coming in on that port.
eg. web server should not be separated like php

## VIII. Concurrency --------------------------

# Scale out via the process model

In the twelve-factor app, processes are a first class citizen.

Using this model, the developer can architect their app to handle diverse workloads by assigning each type of work to a process type. For example, HTTP requests may be handled by a web process, and long-running background tasks handled by a worker process.

The process model truly shines when it comes time to scale out. The share-nothing, horizontally partitionable nature of twelve-factor app processes means that adding more concurrency is a simple and reliable operation. The array of process types and number of processes of each type is known as the process formation.

## IX. Disposability --------------------------

# Maximize robustness with fast startup and graceful shutdown

The twelve-factor app’s processes are disposable, meaning they can be started or stopped at a moment’s notice. This facilitates fast elastic scaling, rapid deployment of code or config changes, and robustness of production deploys.

runnin stopping a process is easy

## X. Dev/prod parity ------------------

# Keep development, staging, and production as similar as possible

tooling/resources should be same, deployment time should be same.

## XI. Logs ------------------------

# Treat logs as event streams

A twelve-factor app never concerns itself with routing or storage of its output stream.
Instead, each running process writes its event stream, unbuffered, to stdout. During local development, the developer will view this stream in the foreground of their terminal to observe the app’s behavior.In staging or production deploys, each process’ stream will be captured by the execution environment, collated together with all other streams from the app, and routed to one or more final destinations for viewing and long-term archival.

log file for prod/staging and cli output for local env

## XII. Admin processes

# Run admin/management tasks as one-off processes
