const abi = {
  source: {
    hash: "0x74164d97ad1995a0367affa428152e6b9265d5df05b0bcdde0a8afdd407ca026",
    language: "ink! 4.0.0-rc",
    compiler: "rustc 1.69.0-nightly",
    build_info: {
      build_mode: "Debug",
      cargo_contract_version: "2.0.0-rc",
      rust_toolchain: "nightly-x86_64-unknown-linux-gnu",
      wasm_opt_settings: {
        keep_debug_symbols: false,
        optimization_passes: "Z",
      },
    },
  },
  contract: {
    name: "token",
    version: "1.2.0",
    authors: [""],
  },
  V4: {
    spec: {
      constructors: [
        {
          args: [
            {
              label: "name",
              type: {
                displayName: ["String"],
                type: 8,
              },
            },
            {
              label: "symbol",
              type: {
                displayName: ["String"],
                type: 8,
              },
            },
            {
              label: "base_uri",
              type: {
                displayName: ["String"],
                type: 8,
              },
            },
          ],
          docs: [],
          label: "new",
          payable: false,
          returnType: {
            displayName: ["ink_primitives", "ConstructorResult"],
            type: 9,
          },
          selector: "0x9bae9d5e",
        },
      ],
      docs: [],
      events: [],
      lang_error: {
        displayName: ["ink", "LangError"],
        type: 10,
      },
      messages: [
        {
          args: [
            {
              label: "to",
              type: {
                displayName: ["psp34_external", "TransferInput1"],
                type: 0,
              },
            },
            {
              label: "id",
              type: {
                displayName: ["psp34_external", "TransferInput2"],
                type: 11,
              },
            },
            {
              label: "data",
              type: {
                displayName: ["psp34_external", "TransferInput3"],
                type: 8,
              },
            },
          ],
          docs: [
            " Transfer approved or owned token from caller.",
            "",
            " On success a `Transfer` event is emitted.",
            "",
            " # Errors",
            "",
            " Returns `TokenNotExists` error if `id` does not exist.",
            "",
            " Returns `NotApproved` error if `from` doesn't have allowance for transferring.",
            "",
            " Returns `SafeTransferCheckFailed` error if `to` doesn't accept transfer.",
          ],
          label: "PSP34::transfer",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 12,
          },
          selector: "0x3128d61b",
        },
        {
          args: [],
          docs: [
            " Returns the collection `Id` of the NFT token.",
            "",
            " This can represents the relationship between tokens/contracts/pallets.",
          ],
          label: "PSP34::collection_id",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 15,
          },
          selector: "0xffa27a5f",
        },
        {
          args: [],
          docs: [" Returns current NFT total supply."],
          label: "PSP34::total_supply",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 16,
          },
          selector: "0x628413fe",
        },
        {
          args: [
            {
              label: "operator",
              type: {
                displayName: ["psp34_external", "ApproveInput1"],
                type: 0,
              },
            },
            {
              label: "id",
              type: {
                displayName: ["psp34_external", "ApproveInput2"],
                type: 17,
              },
            },
            {
              label: "approved",
              type: {
                displayName: ["psp34_external", "ApproveInput3"],
                type: 18,
              },
            },
          ],
          docs: [
            " Approves `operator` to withdraw the `id` token from the caller's account.",
            " If `id` is `None` approves or disapproves the operator for all tokens of the caller.",
            "",
            " On success a `Approval` event is emitted.",
            "",
            " # Errors",
            "",
            " Returns `SelfApprove` error if it is self approve.",
            "",
            " Returns `NotApproved` error if caller is not owner of `id`.",
          ],
          label: "PSP34::approve",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 12,
          },
          selector: "0x1932a8b0",
        },
        {
          args: [
            {
              label: "id",
              type: {
                displayName: ["psp34_external", "OwnerOfInput1"],
                type: 11,
              },
            },
          ],
          docs: [" Returns the owner of the token if any."],
          label: "PSP34::owner_of",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 19,
          },
          selector: "0x1168624d",
        },
        {
          args: [
            {
              label: "owner",
              type: {
                displayName: ["psp34_external", "BalanceOfInput1"],
                type: 0,
              },
            },
          ],
          docs: [
            " Returns the balance of the owner.",
            "",
            " This represents the amount of unique tokens the owner has.",
          ],
          label: "PSP34::balance_of",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 21,
          },
          selector: "0xcde7e55f",
        },
        {
          args: [
            {
              label: "owner",
              type: {
                displayName: ["psp34_external", "AllowanceInput1"],
                type: 0,
              },
            },
            {
              label: "operator",
              type: {
                displayName: ["psp34_external", "AllowanceInput2"],
                type: 0,
              },
            },
            {
              label: "id",
              type: {
                displayName: ["psp34_external", "AllowanceInput3"],
                type: 17,
              },
            },
          ],
          docs: [
            " Returns `true` if the operator is approved by the owner to withdraw `id` token.",
            " If `id` is `None`, returns `true` if the operator is approved to withdraw all owner's tokens.",
          ],
          label: "PSP34::allowance",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 22,
          },
          selector: "0x4790f55a",
        },
        {
          args: [],
          docs: [" Returns the address of the current owner."],
          label: "Ownable::owner",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 23,
          },
          selector: "0x4fa43c8c",
        },
        {
          args: [],
          docs: [
            " Leaves the contract without owner. It will not be possible to call",
            " owner's functions anymore. Can only be called by the current owner.",
            "",
            " NOTE: Renouncing ownership will leave the contract without an owner,",
            " thereby removing any functionality that is only available to the owner.",
            "",
            " On success a `OwnershipTransferred` event is emitted.",
            "",
            " # Errors",
            "",
            " Panics with `CallerIsNotOwner` error if caller is not owner",
          ],
          label: "Ownable::renounce_ownership",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 24,
          },
          selector: "0x5e228753",
        },
        {
          args: [
            {
              label: "new_owner",
              type: {
                displayName: ["ownable_external", "TransferOwnershipInput1"],
                type: 0,
              },
            },
          ],
          docs: [
            " Transfers ownership of the contract to a `new_owner`.",
            " Can only be called by the current owner.",
            "",
            " On success a `OwnershipTransferred` event is emitted.",
            "",
            " # Errors",
            "",
            " Panics with `CallerIsNotOwner` error if caller is not owner.",
            "",
            " Panics with `NewOwnerIsZero` error if new owner's address is zero.",
          ],
          label: "Ownable::transfer_ownership",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 24,
          },
          selector: "0x11f43efd",
        },
        {
          args: [
            {
              label: "owner",
              type: {
                displayName: [
                  "psp34enumerable_external",
                  "OwnersTokenByIndexInput1",
                ],
                type: 0,
              },
            },
            {
              label: "index",
              type: {
                displayName: [
                  "psp34enumerable_external",
                  "OwnersTokenByIndexInput2",
                ],
                type: 7,
              },
            },
          ],
          docs: [
            " Returns a token `Id` owned by `owner` at a given `index` of its token list.",
            " Use along with `balance_of` to enumerate all of ``owner``'s tokens.",
            "",
            " The start index is zero.",
          ],
          label: "PSP34Enumerable::owners_token_by_index",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 27,
          },
          selector: "0x3bcfb511",
        },
        {
          args: [
            {
              label: "index",
              type: {
                displayName: ["psp34enumerable_external", "TokenByIndexInput1"],
                type: 7,
              },
            },
          ],
          docs: [
            " Returns a token `Id` at a given `index` of all the tokens stored by the contract.",
            " Use along with `total_supply` to enumerate all tokens.",
            "",
            " The start index is zero.",
          ],
          label: "PSP34Enumerable::token_by_index",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 27,
          },
          selector: "0xcd0340d0",
        },
        {
          args: [
            {
              label: "id",
              type: {
                displayName: ["psp34metadata_external", "GetAttributeInput1"],
                type: 11,
              },
            },
            {
              label: "key",
              type: {
                displayName: ["psp34metadata_external", "GetAttributeInput2"],
                type: 8,
              },
            },
          ],
          docs: [
            " Returns the attribute of `id` for the given `key`.",
            "",
            " If `id` is a collection id of the token, it returns attributes for collection.",
          ],
          label: "PSP34Metadata::get_attribute",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 29,
          },
          selector: "0xf19d48d1",
        },
        {
          args: [
            {
              label: "to",
              type: {
                displayName: ["custommint_external", "MintInput1"],
                type: 0,
              },
            },
            {
              label: "token_uri",
              type: {
                displayName: ["custommint_external", "MintInput2"],
                type: 8,
              },
            },
            {
              label: "marketplace",
              type: {
                displayName: ["custommint_external", "MintInput3"],
                type: 0,
              },
            },
          ],
          docs: [],
          label: "CustomMint::mint",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 12,
          },
          selector: "0x1f3982a5",
        },
        {
          args: [
            {
              label: "token_id",
              type: {
                displayName: ["custommint_external", "GetTokenUriInput1"],
                type: 11,
              },
            },
          ],
          docs: [],
          label: "CustomMint::get_token_uri",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 31,
          },
          selector: "0x07396e3e",
        },
        {
          args: [
            {
              label: "uri",
              type: {
                displayName: ["custommint_external", "SetBaseUriInput1"],
                type: 33,
              },
            },
          ],
          docs: [],
          label: "CustomMint::set_base_uri",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 12,
          },
          selector: "0x3402d53a",
        },
      ],
    },
    storage: {
      root: {
        layout: {
          struct: {
            fields: [
              {
                layout: {
                  struct: {
                    fields: [
                      {
                        layout: {
                          root: {
                            layout: {
                              leaf: {
                                key: "0x1cc80634",
                                ty: 0,
                              },
                            },
                            root_key: "0x1cc80634",
                          },
                        },
                        name: "token_owner",
                      },
                      {
                        layout: {
                          root: {
                            layout: {
                              leaf: {
                                key: "0x7e3fae6b",
                                ty: 3,
                              },
                            },
                            root_key: "0x7e3fae6b",
                          },
                        },
                        name: "operator_approvals",
                      },
                      {
                        layout: {
                          struct: {
                            fields: [
                              {
                                layout: {
                                  root: {
                                    layout: {
                                      enum: {
                                        dispatchKey: "0xca32a240",
                                        name: "Id",
                                        variants: {
                                          0: {
                                            fields: [
                                              {
                                                layout: {
                                                  leaf: {
                                                    key: "0xca32a240",
                                                    ty: 2,
                                                  },
                                                },
                                                name: "0",
                                              },
                                            ],
                                            name: "U8",
                                          },
                                          1: {
                                            fields: [
                                              {
                                                layout: {
                                                  leaf: {
                                                    key: "0xca32a240",
                                                    ty: 4,
                                                  },
                                                },
                                                name: "0",
                                              },
                                            ],
                                            name: "U16",
                                          },
                                          2: {
                                            fields: [
                                              {
                                                layout: {
                                                  leaf: {
                                                    key: "0xca32a240",
                                                    ty: 5,
                                                  },
                                                },
                                                name: "0",
                                              },
                                            ],
                                            name: "U32",
                                          },
                                          3: {
                                            fields: [
                                              {
                                                layout: {
                                                  leaf: {
                                                    key: "0xca32a240",
                                                    ty: 6,
                                                  },
                                                },
                                                name: "0",
                                              },
                                            ],
                                            name: "U64",
                                          },
                                          4: {
                                            fields: [
                                              {
                                                layout: {
                                                  leaf: {
                                                    key: "0xca32a240",
                                                    ty: 7,
                                                  },
                                                },
                                                name: "0",
                                              },
                                            ],
                                            name: "U128",
                                          },
                                          5: {
                                            fields: [
                                              {
                                                layout: {
                                                  leaf: {
                                                    key: "0xca32a240",
                                                    ty: 8,
                                                  },
                                                },
                                                name: "0",
                                              },
                                            ],
                                            name: "Bytes",
                                          },
                                        },
                                      },
                                    },
                                    root_key: "0xca32a240",
                                  },
                                },
                                name: "enumerable",
                              },
                              {
                                layout: {
                                  enum: {
                                    dispatchKey: "0x00000000",
                                    name: "Option",
                                    variants: {
                                      0: {
                                        fields: [],
                                        name: "None",
                                      },
                                      1: {
                                        fields: [
                                          {
                                            layout: {
                                              leaf: {
                                                key: "0x00000000",
                                                ty: 3,
                                              },
                                            },
                                            name: "0",
                                          },
                                        ],
                                        name: "Some",
                                      },
                                    },
                                  },
                                },
                                name: "_reserved",
                              },
                            ],
                            name: "Balances",
                          },
                        },
                        name: "balances",
                      },
                      {
                        layout: {
                          enum: {
                            dispatchKey: "0x00000000",
                            name: "Option",
                            variants: {
                              0: {
                                fields: [],
                                name: "None",
                              },
                              1: {
                                fields: [
                                  {
                                    layout: {
                                      leaf: {
                                        key: "0x00000000",
                                        ty: 3,
                                      },
                                    },
                                    name: "0",
                                  },
                                ],
                                name: "Some",
                              },
                            },
                          },
                        },
                        name: "_reserved",
                      },
                    ],
                    name: "Data",
                  },
                },
                name: "psp34",
              },
              {
                layout: {
                  struct: {
                    fields: [
                      {
                        layout: {
                          leaf: {
                            key: "0x00000000",
                            ty: 0,
                          },
                        },
                        name: "owner",
                      },
                      {
                        layout: {
                          enum: {
                            dispatchKey: "0x00000000",
                            name: "Option",
                            variants: {
                              0: {
                                fields: [],
                                name: "None",
                              },
                              1: {
                                fields: [
                                  {
                                    layout: {
                                      leaf: {
                                        key: "0x00000000",
                                        ty: 3,
                                      },
                                    },
                                    name: "0",
                                  },
                                ],
                                name: "Some",
                              },
                            },
                          },
                        },
                        name: "_reserved",
                      },
                    ],
                    name: "Data",
                  },
                },
                name: "ownable",
              },
              {
                layout: {
                  struct: {
                    fields: [
                      {
                        layout: {
                          root: {
                            layout: {
                              leaf: {
                                key: "0x9b2d2382",
                                ty: 8,
                              },
                            },
                            root_key: "0x9b2d2382",
                          },
                        },
                        name: "attributes",
                      },
                      {
                        layout: {
                          enum: {
                            dispatchKey: "0x00000000",
                            name: "Option",
                            variants: {
                              0: {
                                fields: [],
                                name: "None",
                              },
                              1: {
                                fields: [
                                  {
                                    layout: {
                                      leaf: {
                                        key: "0x00000000",
                                        ty: 3,
                                      },
                                    },
                                    name: "0",
                                  },
                                ],
                                name: "Some",
                              },
                            },
                          },
                        },
                        name: "_reserved",
                      },
                    ],
                    name: "Data",
                  },
                },
                name: "metadata",
              },
              {
                layout: {
                  struct: {
                    fields: [
                      {
                        layout: {
                          leaf: {
                            key: "0x00000000",
                            ty: 6,
                          },
                        },
                        name: "last_token_id",
                      },
                      {
                        layout: {
                          root: {
                            layout: {
                              leaf: {
                                key: "0x2c53164f",
                                ty: 4,
                              },
                            },
                            root_key: "0x2c53164f",
                          },
                        },
                        name: "royalty",
                      },
                      {
                        layout: {
                          leaf: {
                            key: "0x00000000",
                            ty: 0,
                          },
                        },
                        name: "creator",
                      },
                      {
                        layout: {
                          root: {
                            layout: {
                              leaf: {
                                key: "0x1ff961a3",
                                ty: 8,
                              },
                            },
                            root_key: "0x1ff961a3",
                          },
                        },
                        name: "token_uri",
                      },
                    ],
                    name: "Data",
                  },
                },
                name: "custom_mint",
              },
            ],
            name: "Token",
          },
        },
        root_key: "0x00000000",
      },
    },
    types: [
      {
        id: 0,
        type: {
          def: {
            composite: {
              fields: [
                {
                  type: 1,
                  typeName: "[u8; 32]",
                },
              ],
            },
          },
          path: ["ink_primitives", "types", "AccountId"],
        },
      },
      {
        id: 1,
        type: {
          def: {
            array: {
              len: 32,
              type: 2,
            },
          },
        },
      },
      {
        id: 2,
        type: {
          def: {
            primitive: "u8",
          },
        },
      },
      {
        id: 3,
        type: {
          def: {
            tuple: [],
          },
        },
      },
      {
        id: 4,
        type: {
          def: {
            primitive: "u16",
          },
        },
      },
      {
        id: 5,
        type: {
          def: {
            primitive: "u32",
          },
        },
      },
      {
        id: 6,
        type: {
          def: {
            primitive: "u64",
          },
        },
      },
      {
        id: 7,
        type: {
          def: {
            primitive: "u128",
          },
        },
      },
      {
        id: 8,
        type: {
          def: {
            sequence: {
              type: 2,
            },
          },
        },
      },
      {
        id: 9,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 3,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 10,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 3,
            },
            {
              name: "E",
              type: 10,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 10,
        type: {
          def: {
            variant: {
              variants: [
                {
                  index: 1,
                  name: "CouldNotReadInput",
                },
              ],
            },
          },
          path: ["ink_primitives", "LangError"],
        },
      },
      {
        id: 11,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 2,
                      typeName: "u8",
                    },
                  ],
                  index: 0,
                  name: "U8",
                },
                {
                  fields: [
                    {
                      type: 4,
                      typeName: "u16",
                    },
                  ],
                  index: 1,
                  name: "U16",
                },
                {
                  fields: [
                    {
                      type: 5,
                      typeName: "u32",
                    },
                  ],
                  index: 2,
                  name: "U32",
                },
                {
                  fields: [
                    {
                      type: 6,
                      typeName: "u64",
                    },
                  ],
                  index: 3,
                  name: "U64",
                },
                {
                  fields: [
                    {
                      type: 7,
                      typeName: "u128",
                    },
                  ],
                  index: 4,
                  name: "U128",
                },
                {
                  fields: [
                    {
                      type: 8,
                      typeName: "Vec<u8>",
                    },
                  ],
                  index: 5,
                  name: "Bytes",
                },
              ],
            },
          },
          path: ["openbrush_contracts", "traits", "types", "Id"],
        },
      },
      {
        id: 12,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 13,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 10,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 13,
            },
            {
              name: "E",
              type: 10,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 13,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 3,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 14,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 3,
            },
            {
              name: "E",
              type: 14,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 14,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 8,
                      typeName: "String",
                    },
                  ],
                  index: 0,
                  name: "Custom",
                },
                {
                  index: 1,
                  name: "SelfApprove",
                },
                {
                  index: 2,
                  name: "NotApproved",
                },
                {
                  index: 3,
                  name: "TokenExists",
                },
                {
                  index: 4,
                  name: "TokenNotExists",
                },
                {
                  fields: [
                    {
                      type: 8,
                      typeName: "String",
                    },
                  ],
                  index: 5,
                  name: "SafeTransferCheckFailed",
                },
              ],
            },
          },
          path: [
            "openbrush_contracts",
            "traits",
            "errors",
            "psp34",
            "PSP34Error",
          ],
        },
      },
      {
        id: 15,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 11,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 10,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 11,
            },
            {
              name: "E",
              type: 10,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 16,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 7,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 10,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 7,
            },
            {
              name: "E",
              type: 10,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 17,
        type: {
          def: {
            variant: {
              variants: [
                {
                  index: 0,
                  name: "None",
                },
                {
                  fields: [
                    {
                      type: 11,
                    },
                  ],
                  index: 1,
                  name: "Some",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 11,
            },
          ],
          path: ["Option"],
        },
      },
      {
        id: 18,
        type: {
          def: {
            primitive: "bool",
          },
        },
      },
      {
        id: 19,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 20,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 10,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 20,
            },
            {
              name: "E",
              type: 10,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 20,
        type: {
          def: {
            variant: {
              variants: [
                {
                  index: 0,
                  name: "None",
                },
                {
                  fields: [
                    {
                      type: 0,
                    },
                  ],
                  index: 1,
                  name: "Some",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 0,
            },
          ],
          path: ["Option"],
        },
      },
      {
        id: 21,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 5,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 10,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 5,
            },
            {
              name: "E",
              type: 10,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 22,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 18,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 10,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 18,
            },
            {
              name: "E",
              type: 10,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 23,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 0,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 10,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 0,
            },
            {
              name: "E",
              type: 10,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 24,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 25,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 10,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 25,
            },
            {
              name: "E",
              type: 10,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 25,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 3,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 26,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 3,
            },
            {
              name: "E",
              type: 26,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 26,
        type: {
          def: {
            variant: {
              variants: [
                {
                  index: 0,
                  name: "CallerIsNotOwner",
                },
                {
                  index: 1,
                  name: "NewOwnerIsZero",
                },
              ],
            },
          },
          path: [
            "openbrush_contracts",
            "traits",
            "errors",
            "ownable",
            "OwnableError",
          ],
        },
      },
      {
        id: 27,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 28,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 10,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 28,
            },
            {
              name: "E",
              type: 10,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 28,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 11,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 14,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 11,
            },
            {
              name: "E",
              type: 14,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 29,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 30,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 10,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 30,
            },
            {
              name: "E",
              type: 10,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 30,
        type: {
          def: {
            variant: {
              variants: [
                {
                  index: 0,
                  name: "None",
                },
                {
                  fields: [
                    {
                      type: 8,
                    },
                  ],
                  index: 1,
                  name: "Some",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 8,
            },
          ],
          path: ["Option"],
        },
      },
      {
        id: 31,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 32,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 10,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 32,
            },
            {
              name: "E",
              type: 10,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 32,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 33,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 14,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 33,
            },
            {
              name: "E",
              type: 14,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 33,
        type: {
          def: {
            primitive: "str",
          },
        },
      },
    ],
  },
};

export default abi;
