// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Bucket extends lumi.NamedResource implements BucketArgs {
    public readonly cors?: { maxAgeSeconds?: number, method?: string[], origin?: string[], responseHeader?: string[] }[];
    public readonly forceDestroy?: boolean;
    public readonly location?: string;
    public readonly _name: string;
    public readonly predefinedAcl?: string;
    public readonly project?: string;
    public readonly selfLink?: string;
    public readonly storageClass?: string;
    public readonly url?: string;
    public readonly website?: { mainPageSuffix?: string, notFoundPage?: string }[];

    constructor(name: string, args: BucketArgs) {
        super(name);
        this.cors = args.cors;
        this.forceDestroy = args.forceDestroy;
        this.location = args.location;
        this._name = args._name;
        this.predefinedAcl = args.predefinedAcl;
        this.project = args.project;
        this.selfLink = args.selfLink;
        this.storageClass = args.storageClass;
        this.url = args.url;
        this.website = args.website;
    }
}

export interface BucketArgs {
    readonly cors?: { maxAgeSeconds?: number, method?: string[], origin?: string[], responseHeader?: string[] }[];
    readonly forceDestroy?: boolean;
    readonly location?: string;
    readonly _name: string;
    readonly predefinedAcl?: string;
    readonly project?: string;
    readonly selfLink?: string;
    readonly storageClass?: string;
    readonly url?: string;
    readonly website?: { mainPageSuffix?: string, notFoundPage?: string }[];
}
