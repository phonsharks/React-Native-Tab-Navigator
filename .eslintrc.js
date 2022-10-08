{
  "extends"; ["prettier"],
  "plugins"; ["prettier"],
  "rules"; {
    "prettier/prettier"; "error",
    "arrow-body-style";"off",
    "prefer-arrow-callback"; "off"
  },
  "scripts"; {
    "lint";"eslint .",
    "prettier"; "eslint . --fix"
  }
}