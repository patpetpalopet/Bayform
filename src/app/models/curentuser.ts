
export interface PersonalInfo {
  __metadata?: Metadata;
  FirstUniqueAncestorSecurableObject?: FirstUniqueAncestorSecurableObject;
  RoleAssignments?: FirstUniqueAncestorSecurableObject;
  AttachmentFiles?: FirstUniqueAncestorSecurableObject;
  ContentType?: FirstUniqueAncestorSecurableObject;
  GetDlpPolicyTip?: FirstUniqueAncestorSecurableObject;
  FieldValuesAsHtml?: FirstUniqueAncestorSecurableObject;
  FieldValuesAsText?: FirstUniqueAncestorSecurableObject;
  FieldValuesForEdit?: FirstUniqueAncestorSecurableObject;
  File?: FirstUniqueAncestorSecurableObject;
  Folder?: FirstUniqueAncestorSecurableObject;
  LikedByInformation?: FirstUniqueAncestorSecurableObject;
  ParentList?: FirstUniqueAncestorSecurableObject;
  Properties?: FirstUniqueAncestorSecurableObject;
  Versions?: FirstUniqueAncestorSecurableObject;
  FileSystemObjectType?: number;
  Id?: number;
  ServerRedirectedEmbedUri?: any;
  ServerRedirectedEmbedUrl?: string;
  ContentTypeId?: string;
  Title?: string;
  ComplianceAssetId?: any;
  EmployeeId?: number;
  Thainame?: string;
  Engname?: string;
  Position?: string;
  RCCode?: number;
  OData__x0e3a__x0e3a_Businessunit?: string;
  Division?: string;
  Section?: string;
  ProjectCode?: string;
  AccountCode?: string;
  Phone?: string;
  Mail?: string;
  OData__x004d_an1?: string;
  OData__x004d_an2?: string;
  OData__x004d_an3?: string;
  OData__x004d_an4?: string;
  OData__x004d_an5?: string;
  ID?: number;
  Modified?: string;
  Created?: string;
  AuthorId?: number;
  EditorId?: number;
  OData__UIVersionString?: string;
  Attachments?: boolean;
  GUID?: string;
}

interface FirstUniqueAncestorSecurableObject {
  __deferred?: Deferred;
}

interface Deferred {
  uri?: string;
}

interface Metadata {
  id?: string;
  uri?: string;
  etag?: string;
  type?: string;
}
