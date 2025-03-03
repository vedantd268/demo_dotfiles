vim.api.nvim_create_autocmd("LspAttach", {
  callback = function(args)
    local c = vim.lsp.get_client_by_id(args.data.client_id)
    if not c then
      return
    end

    if c.supports_method("textDocument/formatting") then
      -- NOTE: Format the current buffer on save
      vim.api.nvim_create_autocmd("BufWritePre", {
        buffer = args.buf,
        callback = function()
          vim.lsp.buf.format({ bufnr = args.buf, id = c.id })
        end,
      })
    end
  end,
})

vim.api.nvim_create_autocmd("TextYankPost", {
  group = vim.api.nvim_create_augroup("HighlightYank", { clear = true }),
  pattern = "*",
  callback = function()
    vim.highlight.on_yank({ higroup = "IncSearch", timeout = 150 })
  end,
})
