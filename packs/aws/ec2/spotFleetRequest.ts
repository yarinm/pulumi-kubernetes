// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class SpotFleetRequest extends lumi.NamedResource implements SpotFleetRequestArgs {
    public readonly allocationStrategy?: string;
    public readonly clientToken?: string;
    public readonly excessCapacityTerminationPolicy?: string;
    public readonly iamFleetRole: string;
    public readonly launchSpecification: { ami: string, associatePublicIpAddress?: boolean, availabilityZone?: string, ebsBlockDevice?: { deleteOnTermination?: boolean, deviceName: string, encrypted?: boolean, iops?: number, snapshotId?: string, volumeSize?: number, volumeType?: string }[], ebsOptimized?: boolean, ephemeralBlockDevice?: { deviceName: string, virtualName: string }[], iamInstanceProfile?: string, instanceType: string, keyName?: string, monitoring?: boolean, placementGroup?: string, placementTenancy?: string, rootBlockDevice?: { deleteOnTermination?: boolean, iops?: number, volumeSize?: number, volumeType?: string }[], spotPrice?: string, subnetId?: string, userData?: string, vpcSecurityGroupIds?: string[], weightedCapacity?: string }[];
    public readonly replaceUnhealthyInstances?: boolean;
    public readonly spotPrice: string;
    public readonly spotRequestState?: string;
    public readonly targetCapacity: number;
    public readonly terminateInstancesWithExpiration?: boolean;
    public readonly validFrom?: string;
    public readonly validUntil?: string;

    constructor(name: string, args: SpotFleetRequestArgs) {
        super(name);
        this.allocationStrategy = args.allocationStrategy;
        this.clientToken = args.clientToken;
        this.excessCapacityTerminationPolicy = args.excessCapacityTerminationPolicy;
        this.iamFleetRole = args.iamFleetRole;
        this.launchSpecification = args.launchSpecification;
        this.replaceUnhealthyInstances = args.replaceUnhealthyInstances;
        this.spotPrice = args.spotPrice;
        this.spotRequestState = args.spotRequestState;
        this.targetCapacity = args.targetCapacity;
        this.terminateInstancesWithExpiration = args.terminateInstancesWithExpiration;
        this.validFrom = args.validFrom;
        this.validUntil = args.validUntil;
    }
}

export interface SpotFleetRequestArgs {
    readonly allocationStrategy?: string;
    readonly clientToken?: string;
    readonly excessCapacityTerminationPolicy?: string;
    readonly iamFleetRole: string;
    readonly launchSpecification: { ami: string, associatePublicIpAddress?: boolean, availabilityZone?: string, ebsBlockDevice?: { deleteOnTermination?: boolean, deviceName: string, encrypted?: boolean, iops?: number, snapshotId?: string, volumeSize?: number, volumeType?: string }[], ebsOptimized?: boolean, ephemeralBlockDevice?: { deviceName: string, virtualName: string }[], iamInstanceProfile?: string, instanceType: string, keyName?: string, monitoring?: boolean, placementGroup?: string, placementTenancy?: string, rootBlockDevice?: { deleteOnTermination?: boolean, iops?: number, volumeSize?: number, volumeType?: string }[], spotPrice?: string, subnetId?: string, userData?: string, vpcSecurityGroupIds?: string[], weightedCapacity?: string }[];
    readonly replaceUnhealthyInstances?: boolean;
    readonly spotPrice: string;
    readonly spotRequestState?: string;
    readonly targetCapacity: number;
    readonly terminateInstancesWithExpiration?: boolean;
    readonly validFrom?: string;
    readonly validUntil?: string;
}
