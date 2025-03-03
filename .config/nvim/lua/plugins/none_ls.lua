return {
	"nvimtools/none-ls.nvim",
	dependencies = { "nvim-lua/plenary.nvim" },
	event = "BufReadPre",

	config = function()
		local null_ls = require("null-ls")

		null_ls.setup({
			sources = {
				null_ls.builtins.formatting.black,
				null_ls.builtins.formatting.stylua,
				null_ls.builtins.formatting.prettier.with({
					filetypes = { "javascript", "typescript", "css", "json", "html", "yaml", "markdown" }, -- Customize filetypes if needed
				}),
			},
		})
	end,
}
