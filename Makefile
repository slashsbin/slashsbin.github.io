#!/usr/bin/make -f

SHELL := bash
.SHELLFLAGS := -euo pipefail -c
MAKEFLAGS += --warn-undefined-variables
MAKEFLAGS += --no-builtin-rules
COLUMNS ?= `tput cols`
CORES ?= $(shell (nproc  || sysctl -n hw.ncpu) 2> /dev/null)
MAKE_CMD := ${MAKE} --jobs ${CORES} -k --no-print-directory

MSG := $(MAKECMDGOALS)
.PHONY: _title
_title: MSG=Untitled
_title:
	@echo '->> ${MSG} <<-' | figlet -f slant -c -w ${COLUMNS} | lolcat

.PHONY: _section
_section:
	@printf '\n####[ ${MSG} ]####\n' | lolcat --animate

COLOR_MAGENTA := \033[0;45m
COLOR_RESET := \033[0m
.PHONY: _message_info
_message_info: MSG=Empty Message
_message_info:
	@echo
	@echo -e "${COLOR_MAGENTA} ${MSG} ${COLOR_RESET}"

-include .env

##@ [Manual]
.DEFAULT_GOAL := help
help:  ## Display this help
	@echo "    __   ____  _       ";
	@echo "   / /__| __ )(_)_ __  ";
	@echo "  / / __|  _ \| | '_ \ ";
	@echo " / /\__ \ |_) | | | | |";
	@echo "/_/ |___/____/|_|_| |_|";
	@echo "";
	@echo "";
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z0-9_-]+:.*?##/ { printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' ${MAKEFILE_LIST}

-include .make/*.mk

##@ [App]
.PHONY: setup
setup: _section ## Setup
	npm install

.PHONY: dev
dev: _section ## Dev Server
	npm run dev -- -o

.PHONY: preview
preview: _section ## Prod Preview
	npm run preview

.PHONY: prod
prod: _section ## Prod Build
	npm run build

.PHONY: upgrade
upgrade: _section ## Upgrade Nuxt
	npx nuxi upgrade

.PHONY: clean
clean: _section ## Cleanup
	#npx nuxt cleanup

	@${MAKE_CMD} MSG="Untracked+Ignored files" _message_info
	git clean -n -d -x
