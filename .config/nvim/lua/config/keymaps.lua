vim.g.mapleader = " "
vim.g.maplocalleader = " "

local opts = { noremap = true, silent = true }
local map = vim.keymap.set

-- Exit inset mode
map({ "i", "v" }, "kj", "<ESC>")

-- Select all
map("n", "<C-a>", "gg<S-v>G", opts)

-- Remove search highlight
map("n", "<leader>h", "<cmd>nohlsearch<CR>", opts)

-- Keep last yanked when pasting
map("v", "p", '"_dP', opts)

-- Exit terminal mode
map("t", "<ESC><ESC>", "<C-\\><C-n>", opts)

-- Toogle terminal
map({ "n", "t" }, "<leader>\\", "<cmd>Floaterm<CR>", opts)

-- delete single character without copying into register
map("n", "x", '"_x', opts)

-- Vertical scroll and center
map("n", "<C-d>", "<C-d>zz", opts)
map("n", "<C-u>", "<C-u>zz", opts)

-- Find and center
map("n", "n", "nzzzv", opts)
map("n", "N", "Nzzzv", opts)

-- Stay in indent mode
map("v", "<", "<gv", opts)
map("v", ">", ">gv", opts)

-- Window management
map("n", "<leader>sv", "<C-w>v", opts)     -- split window vertically
map("n", "<leader>ss", "<C-w>s", opts)     -- split window horizontally
map("n", "<leader>xs", ":close<CR>", opts) -- close current split window

-- Resize with arrows
map("n", "<Up>", ":resize -2<CR>", opts)
map("n", "<Down>", ":resize +2<CR>", opts)
map("n", "<Left>", ":vertical resize -2<CR>", opts)
map("n", "<Right>", ":vertical resize +2<CR>", opts)

-- Navigate between splits
map("n", "sk", ":wincmd k<CR>", opts)
map("n", "sj", ":wincmd j<CR>", opts)
map("n", "sh", ":wincmd h<CR>", opts)
map("n", "sl", ":wincmd l<CR>", opts)

-- Buffers
map("n", "<Tab>", ":bnext<CR>", opts)
map("n", "<S-Tab>", ":bprevious<CR>", opts)
map("n", "<leader>x", ":bdelete!<CR>", opts)   -- close buffer
map("n", "<leader>b", "<cmd> enew <CR>", opts) -- new buffer

-- Code action
map("n", "<leader>ca", function()
  require("snacks.lsp").code_action()
end, opts)
