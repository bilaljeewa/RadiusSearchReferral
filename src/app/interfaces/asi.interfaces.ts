//These are some of the asi return interfaces/types.
//We don't have their files at moment, so just use this for now.
export interface UpdateInfo{
    $type:string;
    CreatedBy:string;
    CreatedOn:string;
    UpdatedBy:string;
    UpdatedOn:string;
}

export interface ByteData{
    $type: string;
    $value: string;    
}

export interface StringCollection{
    $type: string;
    $values: Array<string>;
}


export interface DocumentSummaryData{
    $type: string;
    AlternateName: string;
    Description:string;
    DocumentId:string;
    DocumentTypeId:string;
    DocumentVersionId:string;
    IsFolder:boolean;
    IsSystem:boolean;
    Name:string;
    Path:string;
    Status:string;    
}

export interface DocumentData{
    $type: string;
    Data: ByteData;
    UpdateInfo: UpdateInfo;
    Description: string;
    DocumentId: string;
    DocumentVersionId: string;
    DocumentTypeId: string;
    Name:string;
    AlternateName: string;
    Path: string;
    Status: string;
    IsSytem:boolean;
}

export interface DocumentSummaryResponse{
    $type:string;
    IsCachedResult:boolean;
    IsSuccessStatusCode:boolean;
    Message:string;
    ReasonPhrase:string;
    Result: DocumentSummaryData;
}
export interface DocumentSummaryCollection{
    $type: string;
    $values: Array<DocumentSummaryData>;
}
export interface DocumentSummaryCollectionResponse{
    $type:string;
    IsCachedResult:boolean;
    IsSuccessStatusCode:boolean;
    Message:string;
    ReasonPhrase:string;
    Result: DocumentSummaryCollection;
  }


  export interface CriteriaData{
    Operation: number;//an enumeration of values, like 3 = Equals, 7 = Contains will get list soon
    PropertyName: string;// this is a field name you'll find in Properties section
    Values: StringCollection;//a list of preset response to the criterio 
}

export interface CriteriaDataCollection{
    $type:string;
    $values: Array<CriteriaData>;    
}

export interface QueryPropertyData{
    $type: string;
    QuerySourceId: string;
    Name:string;
    PropertyName: string;
    Alias: string;
    Caption: string;
    DisplayFormat: string;
    DisplayOrder: number;
    Link: string;
    DataTypeName: string;
}

export interface QueryPropertyDataCollection{
    $type: string;
    $values: Array<QueryPropertyData>;
}
export interface QueryRelationDataCollection{
    $type:string;
    $values: Array<any>;     //don't know the type at the moment, so using any as a placeholder.
}

export interface QuerySourceData{
    $type: string;
    QuerySourceId: string;
    QuerySourceType: number;
    Name:string;
    Description: string;
}

export interface QuerySourceDataCollection{
    $type:string;
    $values: Array<QuerySourceData>;
}

export interface IqaQueryDefinitionData{
    $type: string;
    Document: DocumentData;
    Parameters: CriteriaDataCollection;
    Path:string;
    Properties: QueryPropertyDataCollection;
    Relations: QueryRelationDataCollection;
    Sources: QuerySourceDataCollection;

}

export interface ValidationResultDataCollection{
    $type: string;
    $values: Array<any>;         //don't know the type at the moment, so using any as a placeholder.
}

export interface ValidationResultsData{
    $type:string;
    Errors: ValidationResultDataCollection;
    Warnings: ValidationResultDataCollection;
}

export interface QueryDefinitionData{
    $type: string;
    Result: IqaQueryDefinitionData;
    IsSuccessStatusCode: boolean;
    Message:string;
    StatusCode: number;
    ValidationResults: ValidationResultDataCollection;
    IsCachedResult: boolean;
}

export interface ClientSideContentItem{
    $type: string;
    ContentKey: string;
    ContentTypeKey: string;
    ContentItemKey: string;
    ShowTitleFlag: boolean;
    SortOrder: number;
    LayoutZone: number;
    ContentItemName: string;
    IconUrl: string;
    Settings: any;
    PartTile:string;
    PartTitleHeadingLevel: number;
    DoNotRenderInDesignMode: boolean;
    CssClass: string;
    ShowBorder: boolean;
    Collapsible: boolean;
    Collapsed: boolean;
    DisplayOnExtraSmallScreens: boolean;
    DisplayOnMediumScreens: boolean;
    DisplayOnLargeScreens: boolean;
    ModuleSpecificSetting: string;
    LicenseKeyRestriction: string;
  
  }
  
  export interface ContentItemData{
    $type: string;
    Data: ClientSideContentItem;
  }
  
  export interface List{
    $type: string;
    $values: Array<any>;
  }
  
  export interface  PagedResult{
    $type:string;
    Items: List;
    Offset: number;
    Limit: number;
    Count: number;
    TotalCount: number;
    NextPageLink: any;
    HasNext: boolean;
    NextOffset: number;
  }


  export interface CurrencyData {
    '$type': string;
    CurrencyCode: string;
    DecimalPositions: number;
  }

  

  export interface AdditionalLineDataCollection {
    $type: string;
    $values: Array<any>;
  }

  export interface AddressLines {
    $type: string;
    $values: Array<string>;
  }

 

  export interface CommunicationPreferenceData {
    '$type': string;
    Reason: string;
  }

  export interface CommunicationPreferenceDataCollection {
    '$type': string;
    '$values': Array<CommunicationPreferenceData>;
  }

  export interface PartySalutationMethodSummaryData {
    '$type': string;
    PartySalutationMethodId: string;
  }

  export interface PartySalutationData {
    $type: string;
    IsOverridden?: boolean;
    SalutationId?: string;
    SalutationMethod: PartySalutationMethodSummaryData;
    Text: string;
  }

  export interface PartySalutationDataCollection {
    '$type': string;
    '$values': Array<PartySalutationData>;
  }


  
  export interface DeliveryData {
    '$type': string;
    Address: FullAddressData;
    AddressId?: string;
    CustomerParty: CustomerPartyData;
    DeliveryId: string;
  }

  export interface DeliveryDataCollection {
    '$type': string;
    '$values': Array<DeliveryData>;
  }

  export interface MonetaryAmountData {
    '$type': string;
    Amount?:number;
    Currency: CurrencyData;
    IsAmountDefined: boolean;
  }

  export interface Event {
    '$type': string;
    EventId: string;
  }

 

  export interface ItemClass {
    '$type': string;
    ItemClassId: string;
  }

 

  export interface QuantityData {
    '$type': string;
    Amount?: number;
  }

  
 

 

  export interface ItemSummaryData {
    '$type': string;
    ItemClass?: ItemClass;
    ItemCode: string;
    ItemId: string;
    Name: string;
  }

  export interface OrderTaxDetailData {
    '$type': string;
    TaxAmount: MonetaryAmountData;
    IsTaxInclusive: boolean;
  }

  export interface OrderTaxDetailDataCollection {
    '$type': string;
    '$values': Array<OrderTaxDetailData>;
  }

  export interface OrderTaxData {
    '$type': string;
    Details: OrderTaxDetailDataCollection;
    TaxTotal: MonetaryAmountData;
    TaxableAmountTotal?: MonetaryAmountData;
    InclusiveTaxTotal: MonetaryAmountData;
  }

  export interface OrderLineData {
    '$type': string;
    Event?: Event;
    OrderLineId?: string;
    AdditionalAttributes?: GenericPropertyDataCollection;
    ChildOrderLines?: OrderLineDataCollection;
    DeliveryId?: string;
    ExtendedAmount?: MonetaryAmountData;
    Item: ItemSummaryData;
    LineNumber?: number;
    QuantityBackordered: QuantityData;
    QuantityOrdered: QuantityData;
    QuantityShipped: QuantityData;
    Tax?: OrderTaxData;
    UnitPrice?: MonetaryAmountData;
    BaseUnitPrice?: MonetaryAmountData;
    Discount?: MonetaryAmountData;
    SourceCode?: string;
  }

  export interface OrderLineDataCollection {
    '$type': string;
    '$values': Array<OrderLineData>;
  }

  export interface OrderTaxDataCollection{
      '$type':string;
      '$values':Array<any>;
  }

 

  export interface AdditionalChargeData {
    '$type': string;
    AdditionalChargeId: string;
    Description: string;
    TotalAmount: MonetaryAmountData;
    Tax: OrderTaxData;
  }

  export interface AdditionalChargeDataCollection {
    '$type': string;
    '$values': Array<AdditionalChargeData>;
  }

  export interface OrderTaxInformationData {
    '$type': string;
    InclusiveTaxTotal: MonetaryAmountData;
    TaxTotal: MonetaryAmountData;
    OrderTaxes: OrderTaxDataCollection;
  }

  
  

  
  export interface OrderData {
    '$type': string;
    BillToCustomerParty: CustomerPartyData;
    Currency: CurrencyData;
    Delivery: DeliveryDataCollection;
    OrderDiscount: MonetaryAmountData;
    LineDiscountTotal: MonetaryAmountData;
    Lines: OrderLineDataCollection;
    LineTotal: MonetaryAmountData;
    MiscellaneousChargesTotal: MonetaryAmountData;
    OrderDate: string;
    IsOrderDateOverridden?: boolean;
    OrderTotal: MonetaryAmountData;
    OriginatorCustomerParty: CustomerPartyData;
    ShippingTotal: MonetaryAmountData;
    SoldToCustomerParty: CustomerPartyData;
    SourceCode: string;
    AdditionalCharges: AdditionalChargeDataCollection;
    TaxInformation: OrderTaxInformationData;
    TotalBasePrice: MonetaryAmountData;
    AdditionalAttributes: GenericPropertyDataCollection;
  }

  

  export interface CreditCardInformationData {
    $type: string;
    Address: AddressData;
  }

  export interface PersonNameData {
    $type: string;
    FirstName: string;
    InformalName: string;
    LastName: string;
    MiddleName: string;
    NamePrefix: string;
    FullName: string;
  }
  
  export interface GenderData {
    $type: string;
    Code: string;
  }
  
  export interface AutoPayAccountData {
    $type: string;
    PaymentMethodIsReadOnly: boolean;
  }
  
  export interface PrimaryOrganizationInformationData {
    '$type': string;
    OrganizationPartyId: string;
    Name: string;
    Title: string;
  }

  
  export interface ValueData{
    $type: string;
    $value: any;
  }
  export interface GenericPropertyData {
    '$type': string;
    Name: string;
    Value: any;
  }

  export interface AddressLineDataCollection{
      $type:string;
      $values: Array<string>;
  }

  export interface AddressData {
    $type: string;
    AddressId: string;
    AddressLines: AddressLineDataCollection;
    Barcode?:string;
    CityName: string;
    CountryCode: string;
    CountryName: string;
    CountrySubEntityCode: string;
    CountrySubEntityName: string;
    FullAddress: string;
    PostalCode: string;
    VerificationStatus: number;
  }
  
  export interface GenericPropertyDataCollection {
    '$type': string;
    '$values': Array<GenericPropertyData>;
  }
  
  


  export interface FullAddressData {
    $type: string;
    AdditionalLines: AdditionalLineDataCollection;
    Address: AddressData;
    AddresseeText: string;
    AddressPurpose: string;
    CommunicationPreferences: CommunicationPreferenceDataCollection;
    Email?: string;
    Fax?: string;
    FullAddressId?: string;
    Note?: string;
    Phone?: string;
    Salutation: PartySalutationData;
    DisplayName: string;
    DisplayOrganizationTitle: string;
    DisplayOrganizationName: string;
  }

  export interface FullAddressDataCollection {
    '$type': string;
    '$values': FullAddressData[];
  }

  export interface AlternateIdData {
    '$type': string;
    Id: string;
    IdType: string;
  }

  export interface AlternateIdDataCollection {
    '$type': string;
    '$values': Array<AlternateIdData>;
  }

  export interface EmailData {
    '$type': string;
    Address: string;
    EmailType: string;
    IsPrimary?: boolean;
  }

  export interface EmailDataCollection {
    '$type': string;
    '$values': Array<EmailData>;
  }

  export interface GiftAidDeclarationDataCollection{
      '$type':string;
      '$values': Array<any>;
  }

  export interface FinancialInformationData {
    '$type': string;
    GiftAidInformation?: GiftAidDeclarationDataCollection;
  }

  export interface PhoneData {
    $type: string;
    Number: string;
    PhoneType: string;
  }

  export interface PhoneDataCollection {
    '$type': string;
    '$values': Array<PhoneData>;
  }

  export interface PartySocialNetworkDataCollection{
      '$type':string;
      $values: Array<any>;
  }

  export interface PartyCommunicationTypePreferenceData{
    $type:string;
    PartyCommunicationTypePreferenceId: string;
    CommunicationTypeId: string;
    OptInFlag:boolean;
  }

  export interface PartyCommunicationTypePreferenceDataCollection{
      $type:string;
      $values: PartyCommunicationTypePreferenceData[];
  }
  


  export interface EntityUpdateInformationData {
    '$type': string;
    CreatedBy: string;
    CreatedOn: string;
    UpdatedBy: string;
    UpdatedOn: string;
  }

  export interface PartyStatusData {
    '$type': string;
    PartyStatusId: string;
    Name: string;
    Description: string;
  }

  export interface PartyData{
    $type: string;
    PersonName: PersonNameData;
    AdditionalAttributes: GenericPropertyDataCollection;
    Addresses: FullAddressDataCollection;
    AlternateIds: AlternateIdDataCollection;
    Emails: EmailDataCollection;
    FinancialInformation: FinancialInformationData;
    Phones: PhoneDataCollection;
    Salutations: PartySalutationDataCollection;
    SocialNetworks: PartySocialNetworkDataCollection;
    CommunicationTypePreferences: PartyCommunicationTypePreferenceDataCollection;
    SortIsOverriden: boolean;
    UpdateInformation: EntityUpdateInformationData;
    PartyId: string;
    Id: string;
    UniformId: string;
    Status: PartyStatusData;
    Name:string;
    Sort: string;
  }

  export interface PersonData {
    '$type': string;
    BirthDate: string;
    Gender: any;
    PersonName: PersonNameData;
    PrimaryOrganization: PrimaryOrganizationInformationData;
    Name: string;
    Sort: string;
    AdditionalAttributes: GenericPropertyDataCollection;
    Addresses: FullAddressDataCollection;
    AlternateIds: AlternateIdDataCollection;
    Emails: EmailDataCollection;
    FinancialInformation: FinancialInformationData;
    Phones: PhoneDataCollection;
    Salutations: PartySalutationDataCollection;
    SocialNetworks: PartySocialNetworkDataCollection;
    CommunicationTypePreferences: PartyCommunicationTypePreferenceDataCollection;
    SortIsOverridden: boolean;
    UpdateInformation: EntityUpdateInformationData;
    PartyId: string;
    Id: string;
    UniformId: string;
    Status: PartyStatusData;
  }
  
  export interface CustomerPartyData {
    '$type': string;
    Party?: PersonData;
    PartyId: string;
  }

  export interface RemittanceData {
    '$type': string;
    CreditCardInformation: CreditCardInformationData;
    PaymentToken: AutoPayAccountData;
    PayorParty: CustomerPartyData;
  }

  export interface RemittanceDataCollection {
    '$type': string;
    '$values'?: Array<RemittanceDataCollection>;
  }

  export interface InvoiceSummaryDataCollection{
      '$type':string;
      '$values': Array<any>;
  }

  export interface ComboOrderData {
    '$type': string;
    Currency: CurrencyData;
    Order: OrderData;
    Invoices: InvoiceSummaryDataCollection;
    Payments: RemittanceDataCollection;
  }
  
  export interface CartData {
    $type: string;
    CartId: string;
    UserId: string;
    ComboOrder: ComboOrderData;
    UpdateInformation: EntityUpdateInformationData;
  }



export interface GenericEntityData{
  $type: string;
  'Properties': GenericPropertyDataCollection;
}


  
  