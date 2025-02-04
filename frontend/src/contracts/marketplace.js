const abi = {
  source: {
    hash: "0x9136f0e8ee95a6a95974566499929afcf4c31ea7c371e1a0a7d3202b3b9f2e11",
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
    name: "marketplace",
    version: "1.2.0",
    authors: ["[your_name] <[your_email]>"],
  },
  V4: {
    spec: {
      constructors: [
        {
          args: [
            {
              label: "market_fee_recipient",
              type: {
                displayName: ["AccountId"],
                type: 0,
              },
            },
          ],
          docs: [],
          label: "new",
          payable: false,
          returnType: {
            displayName: ["ink_primitives", "ConstructorResult"],
            type: 14,
          },
          selector: "0x9bae9d5e",
        },
      ],
      docs: [],
      events: [],
      lang_error: {
        displayName: ["ink", "LangError"],
        type: 15,
      },
      messages: [
        {
          args: [
            {
              label: "address",
              type: {
                displayName: ["nftmarketplace_external", "GetItemInput1"],
                type: 0,
              },
            },
            {
              label: "token_id",
              type: {
                displayName: ["nftmarketplace_external", "GetItemInput2"],
                type: 12,
              },
            },
          ],
          docs: [],
          label: "NFTMarketplace::get_item",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 16,
          },
          selector: "0xd7042c62",
        },
        {
          args: [
            {
              label: "address",
              type: {
                displayName: [
                  "nftmarketplace_external",
                  "CreateDirectSaleInput1",
                ],
                type: 0,
              },
            },
            {
              label: "token_id",
              type: {
                displayName: [
                  "nftmarketplace_external",
                  "CreateDirectSaleInput2",
                ],
                type: 12,
              },
            },
            {
              label: "price",
              type: {
                displayName: [
                  "nftmarketplace_external",
                  "CreateDirectSaleInput3",
                ],
                type: 4,
              },
            },
          ],
          docs: [],
          label: "NFTMarketplace::create_direct_sale",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 20,
          },
          selector: "0x67c19def",
        },
        {
          args: [],
          docs: [],
          label: "NFTMarketplace::get_contract_hash",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 25,
          },
          selector: "0xcc005703",
        },
        {
          args: [],
          docs: [],
          label: "NFTMarketplace::get_timestamp",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 26,
          },
          selector: "0x80a877a6",
        },
        {
          args: [],
          docs: [],
          label: "NFTMarketplace::get_fee_recipient",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 27,
          },
          selector: "0x251c8ccc",
        },
        {
          args: [],
          docs: [],
          label: "NFTMarketplace::get_marketplace_fee",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 28,
          },
          selector: "0x54b410e3",
        },
        {
          args: [],
          docs: [],
          label: "NFTMarketplace::get_all_market_items",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 29,
          },
          selector: "0xb3a9a72a",
        },
        {
          args: [],
          docs: [],
          label: "NFTMarketplace::get_collection_count",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 26,
          },
          selector: "0xd127e19c",
        },
        {
          args: [
            {
              label: "fee",
              type: {
                displayName: [
                  "nftmarketplace_external",
                  "SetMarketplaceFeeInput1",
                ],
                type: 8,
              },
            },
          ],
          docs: [],
          label: "NFTMarketplace::set_marketplace_fee",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 20,
          },
          selector: "0xbceafcd0",
        },
        {
          args: [
            {
              label: "address",
              type: {
                displayName: ["nftmarketplace_external", "AddCollectionInput1"],
                type: 0,
              },
            },
            {
              label: "name",
              type: {
                displayName: ["nftmarketplace_external", "AddCollectionInput2"],
                type: 7,
              },
            },
            {
              label: "symbol",
              type: {
                displayName: ["nftmarketplace_external", "AddCollectionInput3"],
                type: 7,
              },
            },
            {
              label: "collection_hash",
              type: {
                displayName: ["nftmarketplace_external", "AddCollectionInput4"],
                type: 7,
              },
            },
            {
              label: "royalty",
              type: {
                displayName: ["nftmarketplace_external", "AddCollectionInput5"],
                type: 8,
              },
            },
          ],
          docs: [],
          label: "NFTMarketplace::add_collection",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 20,
          },
          selector: "0x773e0aaf",
        },
        {
          args: [
            {
              label: "address",
              type: {
                displayName: [
                  "nftmarketplace_external",
                  "CreateMarketItemInput1",
                ],
                type: 0,
              },
            },
            {
              label: "token_id",
              type: {
                displayName: [
                  "nftmarketplace_external",
                  "CreateMarketItemInput2",
                ],
                type: 12,
              },
            },
          ],
          docs: [],
          label: "NFTMarketplace::create_market_item",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 20,
          },
          selector: "0xd6d7adcb",
        },
        {
          args: [
            {
              label: "address",
              type: {
                displayName: [
                  "nftmarketplace_external",
                  "WithdrawAuctionInput1",
                ],
                type: 0,
              },
            },
            {
              label: "token_id",
              type: {
                displayName: [
                  "nftmarketplace_external",
                  "WithdrawAuctionInput2",
                ],
                type: 12,
              },
            },
          ],
          docs: [],
          label: "NFTMarketplace::withdraw_auction",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 20,
          },
          selector: "0x815c485c",
        },
        {
          args: [
            {
              label: "contract_hash",
              type: {
                displayName: [
                  "nftmarketplace_external",
                  "SetContractHashInput1",
                ],
                type: 9,
              },
            },
          ],
          docs: [],
          label: "NFTMarketplace::set_contract_hash",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 20,
          },
          selector: "0x4bbb6ab7",
        },
        {
          args: [
            {
              label: "address",
              type: {
                displayName: ["nftmarketplace_external", "SettleAuctionInput1"],
                type: 0,
              },
            },
            {
              label: "token_id",
              type: {
                displayName: ["nftmarketplace_external", "SettleAuctionInput2"],
                type: 12,
              },
            },
          ],
          docs: [],
          label: "NFTMarketplace::settle_auction",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 20,
          },
          selector: "0x3f5a6497",
        },
        {
          args: [
            {
              label: "address",
              type: {
                displayName: ["nftmarketplace_external", "GetCollectionInput1"],
                type: 0,
              },
            },
          ],
          docs: [],
          label: "NFTMarketplace::get_collection",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 30,
          },
          selector: "0xed6c4670",
        },
        {
          args: [],
          docs: [],
          label: "NFTMarketplace::get_blocknumber",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 33,
          },
          selector: "0xd6288b10",
        },
        {
          args: [
            {
              label: "address",
              type: {
                displayName: [
                  "nftmarketplace_external",
                  "CloseDirectSaleInput1",
                ],
                type: 0,
              },
            },
            {
              label: "token_id",
              type: {
                displayName: [
                  "nftmarketplace_external",
                  "CloseDirectSaleInput2",
                ],
                type: 12,
              },
            },
          ],
          docs: [],
          label: "NFTMarketplace::close_direct_sale",
          mutates: true,
          payable: true,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 20,
          },
          selector: "0xa0d19d1f",
        },
        {
          args: [
            {
              label: "address",
              type: {
                displayName: ["nftmarketplace_external", "MakeBidInput1"],
                type: 0,
              },
            },
            {
              label: "token_id",
              type: {
                displayName: ["nftmarketplace_external", "MakeBidInput2"],
                type: 12,
              },
            },
          ],
          docs: [],
          label: "NFTMarketplace::make_bid",
          mutates: true,
          payable: true,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 20,
          },
          selector: "0x1ca92d3e",
        },
        {
          args: [],
          docs: [],
          label: "NFTMarketplace::get_item_count",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 26,
          },
          selector: "0x30f35e57",
        },
        {
          args: [
            {
              label: "address",
              type: {
                displayName: ["nftmarketplace_external", "CreateAuctionInput1"],
                type: 0,
              },
            },
            {
              label: "token_id",
              type: {
                displayName: ["nftmarketplace_external", "CreateAuctionInput2"],
                type: 12,
              },
            },
            {
              label: "price",
              type: {
                displayName: ["nftmarketplace_external", "CreateAuctionInput3"],
                type: 4,
              },
            },
            {
              label: "min_bid",
              type: {
                displayName: ["nftmarketplace_external", "CreateAuctionInput4"],
                type: 4,
              },
            },
            {
              label: "duration",
              type: {
                displayName: ["nftmarketplace_external", "CreateAuctionInput5"],
                type: 5,
              },
            },
          ],
          docs: [],
          label: "NFTMarketplace::create_auction",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 20,
          },
          selector: "0xe4fcea64",
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
                          leaf: {
                            key: "0x00000000",
                            ty: 2,
                          },
                        },
                        name: "status",
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
                name: "guard",
              },
              {
                layout: {
                  struct: {
                    fields: [
                      {
                        layout: {
                          root: {
                            layout: {
                              struct: {
                                fields: [
                                  {
                                    layout: {
                                      leaf: {
                                        key: "0x8ad5db05",
                                        ty: 0,
                                      },
                                    },
                                    name: "owner",
                                  },
                                  {
                                    layout: {
                                      leaf: {
                                        key: "0x8ad5db05",
                                        ty: 4,
                                      },
                                    },
                                    name: "buy_price",
                                  },
                                  {
                                    layout: {
                                      enum: {
                                        dispatchKey: "0x8ad5db05",
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
                                                    key: "0x8ad5db05",
                                                    ty: 0,
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
                                    name: "seller",
                                  },
                                  {
                                    layout: {
                                      leaf: {
                                        key: "0x8ad5db05",
                                        ty: 4,
                                      },
                                    },
                                    name: "highest_bid",
                                  },
                                  {
                                    layout: {
                                      enum: {
                                        dispatchKey: "0x8ad5db05",
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
                                                    key: "0x8ad5db05",
                                                    ty: 0,
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
                                    name: "highest_bidder",
                                  },
                                  {
                                    layout: {
                                      leaf: {
                                        key: "0x8ad5db05",
                                        ty: 4,
                                      },
                                    },
                                    name: "min_bid",
                                  },
                                  {
                                    layout: {
                                      leaf: {
                                        key: "0x8ad5db05",
                                        ty: 4,
                                      },
                                    },
                                    name: "next_min_bid",
                                  },
                                  {
                                    layout: {
                                      leaf: {
                                        key: "0x8ad5db05",
                                        ty: 5,
                                      },
                                    },
                                    name: "bid_end_time",
                                  },
                                  {
                                    layout: {
                                      leaf: {
                                        key: "0x8ad5db05",
                                        ty: 6,
                                      },
                                    },
                                    name: "on_sale",
                                  },
                                  {
                                    layout: {
                                      leaf: {
                                        key: "0x8ad5db05",
                                        ty: 6,
                                      },
                                    },
                                    name: "direct",
                                  },
                                ],
                                name: "AuctionItem",
                              },
                            },
                            root_key: "0x8ad5db05",
                          },
                        },
                        name: "items",
                      },
                      {
                        layout: {
                          root: {
                            layout: {
                              struct: {
                                fields: [
                                  {
                                    layout: {
                                      leaf: {
                                        key: "0x258edc07",
                                        ty: 7,
                                      },
                                    },
                                    name: "name",
                                  },
                                  {
                                    layout: {
                                      leaf: {
                                        key: "0x258edc07",
                                        ty: 7,
                                      },
                                    },
                                    name: "symbol",
                                  },
                                  {
                                    layout: {
                                      leaf: {
                                        key: "0x258edc07",
                                        ty: 7,
                                      },
                                    },
                                    name: "ipfs",
                                  },
                                  {
                                    layout: {
                                      enum: {
                                        dispatchKey: "0x258edc07",
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
                                                    key: "0x258edc07",
                                                    ty: 0,
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
                                    name: "creator",
                                  },
                                  {
                                    layout: {
                                      leaf: {
                                        key: "0x258edc07",
                                        ty: 8,
                                      },
                                    },
                                    name: "royalty",
                                  },
                                ],
                                name: "Collection",
                              },
                            },
                            root_key: "0x258edc07",
                          },
                        },
                        name: "collections",
                      },
                      {
                        layout: {
                          leaf: {
                            key: "0x00000000",
                            ty: 8,
                          },
                        },
                        name: "fee",
                      },
                      {
                        layout: {
                          leaf: {
                            key: "0x00000000",
                            ty: 0,
                          },
                        },
                        name: "market_fee_recipient",
                      },
                      {
                        layout: {
                          leaf: {
                            key: "0x00000000",
                            ty: 4,
                          },
                        },
                        name: "bid_inc_percent",
                      },
                      {
                        layout: {
                          leaf: {
                            key: "0x00000000",
                            ty: 9,
                          },
                        },
                        name: "contract_hash",
                      },
                      {
                        layout: {
                          leaf: {
                            key: "0x00000000",
                            ty: 5,
                          },
                        },
                        name: "collection_count",
                      },
                      {
                        layout: {
                          leaf: {
                            key: "0x00000000",
                            ty: 5,
                          },
                        },
                        name: "item_count",
                      },
                      {
                        layout: {
                          leaf: {
                            key: "0x00000000",
                            ty: 10,
                          },
                        },
                        name: "market_items",
                      },
                    ],
                    name: "Data",
                  },
                },
                name: "marketplace",
              },
            ],
            name: "MarketplaceContract",
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
            primitive: "u128",
          },
        },
      },
      {
        id: 5,
        type: {
          def: {
            primitive: "u64",
          },
        },
      },
      {
        id: 6,
        type: {
          def: {
            primitive: "bool",
          },
        },
      },
      {
        id: 7,
        type: {
          def: {
            sequence: {
              type: 2,
            },
          },
        },
      },
      {
        id: 8,
        type: {
          def: {
            primitive: "u16",
          },
        },
      },
      {
        id: 9,
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
          path: ["ink_primitives", "types", "Hash"],
        },
      },
      {
        id: 10,
        type: {
          def: {
            sequence: {
              type: 11,
            },
          },
        },
      },
      {
        id: 11,
        type: {
          def: {
            tuple: [0, 12],
          },
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
                      type: 8,
                      typeName: "u16",
                    },
                  ],
                  index: 1,
                  name: "U16",
                },
                {
                  fields: [
                    {
                      type: 13,
                      typeName: "u32",
                    },
                  ],
                  index: 2,
                  name: "U32",
                },
                {
                  fields: [
                    {
                      type: 5,
                      typeName: "u64",
                    },
                  ],
                  index: 3,
                  name: "U64",
                },
                {
                  fields: [
                    {
                      type: 4,
                      typeName: "u128",
                    },
                  ],
                  index: 4,
                  name: "U128",
                },
                {
                  fields: [
                    {
                      type: 7,
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
        id: 13,
        type: {
          def: {
            primitive: "u32",
          },
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
                      type: 3,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 15,
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
              type: 15,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 15,
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
        id: 16,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 17,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 15,
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
              type: 17,
            },
            {
              name: "E",
              type: 15,
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
                      type: 18,
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
              type: 18,
            },
          ],
          path: ["Option"],
        },
      },
      {
        id: 18,
        type: {
          def: {
            composite: {
              fields: [
                {
                  name: "owner",
                  type: 0,
                  typeName: "AccountId",
                },
                {
                  name: "buy_price",
                  type: 4,
                  typeName: "Balance",
                },
                {
                  name: "seller",
                  type: 19,
                  typeName: "Option<AccountId>",
                },
                {
                  name: "highest_bid",
                  type: 4,
                  typeName: "Balance",
                },
                {
                  name: "highest_bidder",
                  type: 19,
                  typeName: "Option<AccountId>",
                },
                {
                  name: "min_bid",
                  type: 4,
                  typeName: "Balance",
                },
                {
                  name: "next_min_bid",
                  type: 4,
                  typeName: "Balance",
                },
                {
                  name: "bid_end_time",
                  type: 5,
                  typeName: "Timestamp",
                },
                {
                  name: "on_sale",
                  type: 6,
                  typeName: "bool",
                },
                {
                  name: "direct",
                  type: 6,
                  typeName: "bool",
                },
              ],
            },
          },
          path: [
            "marketplace_pkg",
            "impls",
            "marketplace",
            "types",
            "AuctionItem",
          ],
        },
      },
      {
        id: 19,
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
        id: 20,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 21,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 15,
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
              type: 21,
            },
            {
              name: "E",
              type: 15,
            },
          ],
          path: ["Result"],
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
                      type: 3,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 22,
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
              type: 22,
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
                      type: 23,
                      typeName: "OwnableError",
                    },
                  ],
                  index: 0,
                  name: "OwnableError",
                },
                {
                  fields: [
                    {
                      type: 24,
                      typeName: "ReentrancyGuardError",
                    },
                  ],
                  index: 1,
                  name: "ReentrancyError",
                },
                {
                  index: 2,
                  name: "TokenDoesNotExist",
                },
                {
                  index: 3,
                  name: "TokenAlreadyExists",
                },
                {
                  index: 4,
                  name: "TokenAlreadyOnSale",
                },
                {
                  index: 5,
                  name: "NotTheOwner",
                },
                {
                  index: 6,
                  name: "MinimumBidNotMet",
                },
                {
                  index: 7,
                  name: "IneligibleBidDuration",
                },
                {
                  index: 8,
                  name: "IneligibleBuyPrice",
                },
                {
                  index: 9,
                  name: "TokenNotForSale",
                },
                {
                  index: 10,
                  name: "AuctionExpired",
                },
                {
                  index: 11,
                  name: "AuctionOngoing",
                },
                {
                  index: 12,
                  name: "NoValidBids",
                },
                {
                  index: 13,
                  name: "NotAuthorized",
                },
                {
                  index: 14,
                  name: "TokenNotForDirectSale",
                },
                {
                  index: 15,
                  name: "TokenOnlyForDirectSale",
                },
                {
                  index: 16,
                  name: "IncorrectBuyPrice",
                },
                {
                  index: 17,
                  name: "TransferToBidderFailed",
                },
                {
                  index: 18,
                  name: "TransferToOwnerFailed",
                },
                {
                  index: 19,
                  name: "TransferToContractFailed",
                },
                {
                  index: 20,
                  name: "MarketplaceFeeTransferFailed",
                },
                {
                  index: 21,
                  name: "RoyaltiesTransferFailed",
                },
                {
                  index: 22,
                  name: "ContractHashNotSet",
                },
                {
                  index: 23,
                  name: "TokenInstantiationFailed",
                },
                {
                  index: 24,
                  name: "MinimumBidAlreadyMet",
                },
                {
                  index: 25,
                  name: "CollectionAlreadyExists",
                },
                {
                  index: 26,
                  name: "CollectionNotRegisteredToMarketplace",
                },
                {
                  index: 27,
                  name: "ApprovalFailed",
                },
                {
                  index: 28,
                  name: "BidNotUpdated",
                },
              ],
            },
          },
          path: [
            "marketplace_pkg",
            "impls",
            "marketplace",
            "types",
            "MarketplaceError",
          ],
        },
      },
      {
        id: 23,
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
        id: 24,
        type: {
          def: {
            variant: {
              variants: [
                {
                  index: 0,
                  name: "ReentrantCall",
                },
              ],
            },
          },
          path: [
            "openbrush_contracts",
            "traits",
            "errors",
            "reentrancy_guard",
            "ReentrancyGuardError",
          ],
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
                      type: 9,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 15,
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
              type: 9,
            },
            {
              name: "E",
              type: 15,
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
                      type: 15,
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
              type: 15,
            },
          ],
          path: ["Result"],
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
                      type: 0,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 15,
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
              type: 15,
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
                      type: 8,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 15,
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
              type: 8,
            },
            {
              name: "E",
              type: 15,
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
                      type: 10,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 15,
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
              type: 10,
            },
            {
              name: "E",
              type: 15,
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
                  fields: [
                    {
                      type: 31,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 15,
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
              type: 31,
            },
            {
              name: "E",
              type: 15,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 31,
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
                      type: 32,
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
              type: 32,
            },
          ],
          path: ["Option"],
        },
      },
      {
        id: 32,
        type: {
          def: {
            composite: {
              fields: [
                {
                  name: "name",
                  type: 7,
                  typeName: "String",
                },
                {
                  name: "symbol",
                  type: 7,
                  typeName: "String",
                },
                {
                  name: "ipfs",
                  type: 7,
                  typeName: "String",
                },
                {
                  name: "creator",
                  type: 19,
                  typeName: "Option<AccountId>",
                },
                {
                  name: "royalty",
                  type: 8,
                  typeName: "u16",
                },
              ],
            },
          },
          path: [
            "marketplace_pkg",
            "impls",
            "marketplace",
            "types",
            "Collection",
          ],
        },
      },
      {
        id: 33,
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
                      type: 15,
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
              type: 15,
            },
          ],
          path: ["Result"],
        },
      },
    ],
  },
};

export default abi;
