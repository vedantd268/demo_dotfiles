return {
  "folke/tokyonight.nvim",
  lazy = false,
  priority = 1000,
  config = function()
    require("tokyonight").setup({
      style = "night",
      styles = {
        sidebars = "solid",
        floats = "transparent",
      },
      on_highlights = function(hl, c)
        hl.LineNr = { fg = c.orange }
      end,
    })
    vim.cmd("colorscheme tokyonight")
  end,
}
