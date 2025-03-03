eval "$(starship init zsh)"

# NOTE: Set the directory we want to store zinit and plugins
ZINIT_HOME="${XDG_DATA_HOME:-${HOME}/.local/share}/zinit/zinit.git"

# NOTE: Download Zinit, if it's not there yet
if [ ! -d "$ZINIT_HOME" ]; then
   mkdir -p "$(dirname $ZINIT_HOME)"
   git clone https://github.com/zdharma-continuum/zinit.git "$ZINIT_HOME"
fi

# NOTE: Source/Load zinit
source "${ZINIT_HOME}/zinit.zsh"

# NOTE: Add in zsh plugins
zinit light zsh-users/zsh-syntax-highlighting
zinit light zsh-users/zsh-completions
zinit light zsh-users/zsh-autosuggestions

# NOTE: Add in snippets
zinit snippet OMZL::git.zsh
zinit snippet OMZP::git
zinit snippet OMZP::sudo
zinit snippet OMZP::archlinux
zinit snippet OMZP::command-not-found

# NOTE: Load completions
autoload -Uz compinit && compinit

zinit cdreplay -q
zstyle ':completion:*' matcher-list 'm:{a-z}={A-Za-z}'
zstyle ':completion:*' menu select
zstyle ':completion:*:descriptions' format '%F{yellow}%d%f'
zstyle ':completion:*:messages' format '%F{blue}%d%f'
zstyle ':completion:*:warnings' format '%F{red}%d%f'
zstyle ':completion:*' group-name ''

# NOTE: keybindigs
bindkey "^[[A" history-search-backword
bindkey "^[[B" history-search-forward

# NOTE: history
HISTSIZE=9999
HISTFILE=~/.zsh_history
SAVEHIST=$HISTSIZE
HISTDUP=erase
setopt appendhistory
setopt sharehistory

# NOTE: common alias
alias ls="eza --git --icons=always --color=always --no-time --group-directories-last"
alias la='ls -a'
alias ll='ls -l'
alias lla='ll -a'
alias lt='ls --tree --level=1'
alias lt2='ls --tree --level=2'
alias lt3='ls --tree --level=3'
alias lt4='ls --tree --level=4'
alias inv='nvim $(fzf -m --preview="bat --color=always {}")'

# NOTE: zsh aliases
alias zshconf='nvim ~/.zshrc'
alias reloadzsh='source ~/.zshrc'

# NOTE: shell integration
source <(fzf --zsh)
eval "$(zoxide init zsh)"

