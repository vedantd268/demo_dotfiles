return {
  "saghen/blink.cmp",
  dependencies = "rafamadriz/friendly-snippets",
  event = "InsertEnter",

  version = "*",
  opts = {
    keymap = { preset = "default" },

    -- NOTE:chartoggle = { enabled = true },
    -- delimiters = { enabled = false },
    -- indent = { enabled = false },
    -- tree = { enabled = false },

    appearance = {
      use_nvim_cmp_as_default = true,
      nerd_font_variant = "normal",
    },

    sources = {
      default = { "lsp", "path", "snippets", "buffer" },
    },
  },
}
