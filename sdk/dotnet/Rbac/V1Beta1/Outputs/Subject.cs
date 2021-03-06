// *** WARNING: this file was generated by pulumigen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Kubernetes.Types.Outputs.Rbac.V1Beta1
{

    [OutputType]
    public sealed class Subject
    {
        /// <summary>
        /// APIGroup holds the API group of the referenced subject. Defaults to "" for ServiceAccount subjects. Defaults to "rbac.authorization.k8s.io" for User and Group subjects.
        /// </summary>
        public readonly string ApiGroup;
        /// <summary>
        /// Kind of object being referenced. Values defined by this API group are "User", "Group", and "ServiceAccount". If the Authorizer does not recognized the kind value, the Authorizer should report an error.
        /// </summary>
        public readonly string Kind;
        /// <summary>
        /// Name of the object being referenced.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Namespace of the referenced object.  If the object kind is non-namespace, such as "User" or "Group", and this value is not empty the Authorizer should report an error.
        /// </summary>
        public readonly string Namespace;

        [OutputConstructor]
        private Subject(
            string apiGroup,

            string kind,

            string name,

            string @namespace)
        {
            ApiGroup = apiGroup;
            Kind = kind;
            Name = name;
            Namespace = @namespace;
        }
    }
}
