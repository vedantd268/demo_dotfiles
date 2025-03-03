return {
  {
    "williamboman/mason.nvim",
    event = "VeryLazy",

    config = function()
      require("mason").setup({})
    end,
  },
  {
    "williamboman/mason-lspconfig.nvim",
    event = "VeryLazy",

    config = function()
      require("mason-lspconfig").setup({
        ensure_installed = { "lua_ls", "ts_ls", "jedi_language_server" },
      })
    end,
  },
  {
    "neovim/nvim-lspconfig",
    dependencies = { "saghen/blink.cmp" },
    event = { "BufReadPre", "BufNewFile" },

    config = function()
      local cap = require("blink.cmp").get_lsp_capabilities()
      local lspconfig = require("lspconfig")

      lspconfig.lua_ls.setup({
        capabilities = cap,
      })

      lspconfig.jedi_language_server.setup({
        capabilities = cap,
      })

      lspconfig.ts_ls.setup({
        capabilities = cap,
      })
    end,
  },
}
