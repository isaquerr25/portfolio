import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type GraphState = {
  __typename?: 'GraphState';
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type InputLied = {
  address?: InputMaybe<Scalars['String']>;
  birth?: InputMaybe<Scalars['String']>;
  cep?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  maritalStatus?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  originLied?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  product: InputProduct;
  salaryYear?: InputMaybe<Scalars['String']>;
  sex?: InputMaybe<Scalars['String']>;
  statusLead?: InputMaybe<Scalars['String']>;
};

export type InputProduct = {
  campaign?: InputMaybe<Scalars['String']>;
  conjunct?: InputMaybe<Scalars['String']>;
  liedId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  niche?: InputMaybe<Scalars['String']>;
  originClient?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  liedWithProductCreate: GraphState;
};


export type MutationLiedWithProductCreateArgs = {
  data: InputLied;
};

export type Query = {
  __typename?: 'Query';
  liedGet: GraphState;
};


export type QueryLiedGetArgs = {
  data: InputLied;
};

export type LiedWithProductCreateMutationVariables = Exact<{
  email: Scalars['String'];
  name: Scalars['String'];
  originLied: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  productName: Scalars['String'];
  productConjunct: Scalars['String'];
  productCampaign: Scalars['String'];
  productNiche: Scalars['String'];
  productOriginClient: Scalars['String'];
}>;


export type LiedWithProductCreateMutation = { __typename?: 'Mutation', liedWithProductCreate: { __typename?: 'GraphState', field?: string | null, message?: string | null } };


export const LiedWithProductCreateDocument = gql`
    mutation LiedWithProductCreate($email: String!, $name: String!, $originLied: String!, $phone: String, $productName: String!, $productConjunct: String!, $productCampaign: String!, $productNiche: String!, $productOriginClient: String!) {
  liedWithProductCreate(
    data: {email: $email, name: $name, originLied: $originLied, phone: $phone, product: {name: $productName, conjunct: $productConjunct, campaign: $productCampaign, niche: $productNiche, originClient: $productOriginClient}}
  ) {
    field
    message
  }
}
    `;
export type LiedWithProductCreateMutationFn = Apollo.MutationFunction<LiedWithProductCreateMutation, LiedWithProductCreateMutationVariables>;

/**
 * __useLiedWithProductCreateMutation__
 *
 * To run a mutation, you first call `useLiedWithProductCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLiedWithProductCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [liedWithProductCreateMutation, { data, loading, error }] = useLiedWithProductCreateMutation({
 *   variables: {
 *      email: // value for 'email'
 *      name: // value for 'name'
 *      originLied: // value for 'originLied'
 *      phone: // value for 'phone'
 *      productName: // value for 'productName'
 *      productConjunct: // value for 'productConjunct'
 *      productCampaign: // value for 'productCampaign'
 *      productNiche: // value for 'productNiche'
 *      productOriginClient: // value for 'productOriginClient'
 *   },
 * });
 */
export function useLiedWithProductCreateMutation(baseOptions?: Apollo.MutationHookOptions<LiedWithProductCreateMutation, LiedWithProductCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LiedWithProductCreateMutation, LiedWithProductCreateMutationVariables>(LiedWithProductCreateDocument, options);
      }
export type LiedWithProductCreateMutationHookResult = ReturnType<typeof useLiedWithProductCreateMutation>;
export type LiedWithProductCreateMutationResult = Apollo.MutationResult<LiedWithProductCreateMutation>;
export type LiedWithProductCreateMutationOptions = Apollo.BaseMutationOptions<LiedWithProductCreateMutation, LiedWithProductCreateMutationVariables>;