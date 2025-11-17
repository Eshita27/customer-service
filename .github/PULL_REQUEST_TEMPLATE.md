### 📌 Description

_What does this PR introduce or change?_

- [ ] New feature
- [ ] Bug fix
- [ ] Refactor
- [ ] Documentation
- [ ] CI/CD or tooling
- [ ] Other (please describe):

---

### ✅ Checklist

- [ ] Code compiles and runs locally
- [ ] Swagger spec exports successfully (`npx ts-node src/scripts/exportOpenApi.ts`)
- [ ] Zod schemas include `.openapi()` metadata where needed
- [ ] No breaking changes introduced (or documented if so)
- [ ] Changelog updated (`CHANGELOG.md`)
- [ ] Follows commit style guide (`CONTRIBUTING.md`)

---

### 🔍 Reviewer Notes

_Anything specific to look out for?_

- Schema coverage, metadata, or edge cases
- Exported YAML structure
- Service layer boundaries
- CI/CD compatibility

---

### 🧠 Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/):

- `feat:` for new features
- `fix:` for bug fixes
- `chore:` for tooling or dependencies
- `refactor:` for internal improvements
- `docs:` for documentation updates

---

### 📎 Related Issues / Context

_Link to any related issues, discussions, or context here._