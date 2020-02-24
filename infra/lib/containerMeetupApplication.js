const cdk = require('@aws-cdk/core');
const iam = require('@aws-cdk/aws-iam');
const ec2 = require('@aws-cdk/aws-ec2');
const autoScaling = require('@aws-cdk/aws-autoscaling');

class ContainerMeetupApplication extends cdk.Stack {
    /**
     * @param {cdk.Construct} scope
     * @param {string} id
     * @param {cdk.StackProps=} props
     */
    constructor(scope, id, props) {
        super(scope, id, props);

        // // Create a load-balanced Fargate service and make it public
        // const service = new ecs_patterns.ApplicationLoadBalancedFargateService(this, "FargateService", {
        //     serviceName: 'container-meetup-application',
        //     cluster: cluster, // Required
        //     cpu: 256, // Default is 256
        //     desiredCount: 3, // Default is 1
        //     taskImageOptions: {
        //         containerName: 'container-meetup-application',
        //         containerPort: 8000,
        //         image: props.ecr.
        //     },
        //     memoryLimitMiB: 512, // Default is 512
        //     publicLoadBalancer: true // Default is false
        // });

        // service.taskDefinition.addToExecutionRolePolicy(new iam.PolicyStatement({
        //     effect: iam.Effect.ALLOW,
        //     actions: ['ecr:*'],
        //     resources: ['*']
        // }));
    }
}

module.exports = { ContainerMeetupApplication }
