return {
  "akinsho/bufferline.nvim",
  version = "*",
  dependencies = { "nvim-tree/nvim-web-devicons" },
  event = "VeryLazy",
  opts = {
    options = {
      show_buffer_close_icons = false,
      show_close_icon = false,
      always_show_bufferline = true,
    },
  }
}
