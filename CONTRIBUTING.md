# Contributing

$$\text{\textbf{Contribution}, \textit{noun}}$$
$$\text{"Something that you contribute or do to help produce or achieve something together with other people,}$$
$$\text{or to help make something successful."}$$

Thank you for your interest in contributing to HOLP! We welcome contributions from everyone. Contribution to the HOLP repository is permitted to _anyone_, as far as the rules allow. One of the main goals of an open-source project is the collaboration between peers. To collaborate effectively and painlessly, please keep an adult and civil tone.

This document provides guidelines and instructions to help you get started.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Conventional Commits](#conventional-commits)
- [Making Changes](#making-changes)
- [Submitting Pull Requests](#submitting-pull-requests)
- [Code Style](#code-style)
- [Translating](#translating)
- [Questions or Issues?](#questions-or-issues)

## Getting Started

1. **Fork the repository** on GitHub.
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/holp.git
   cd holp
   ```
3. **Add the upstream repository** as a remote:
   ```bash
   git remote add upstream https://github.com/original-owner/holp.git
   ```
4. **Create a feature branch** for your work:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Setup

To prepare your local environment:

1. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

2. **Install Git hooks** (required for Conventional Commits checks):
   ```bash
   pre-commit install
   pre-commit install --hook-type commit-msg
   ```

These hooks will automatically validate your commits against the Conventional Commits specification before they are committed.

## Conventional Commits

This project strictly adheres to the **[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)** specification for all commit messages. This standard helps us maintain a clear, structured commit history and enables automated semantic versioning.

### Commit Format

All commits must follow this format:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Commit Types

- **feat**: A new feature (triggers a minor version bump)
- **fix**: A bug fix (triggers a patch version bump)
- **docs**: Documentation-only changes
- **style**: Changes that don't affect code meaning (formatting, whitespace, etc.)
- **refactor**: Code changes that neither fix bugs nor add features
- **perf**: Code changes that improve performance
- **test**: Adding or updating tests
- **ci**: Changes to CI/CD configuration
- **chore**: Changes to build process, dependencies, or tooling
- **revert**: Revert a previous commit

### Examples

**Simple bug fix:**
```
fix: correct typo in README
```

**New feature with scope:**
```
feat(docker): add multi-stage build optimization

Improves image size by 40% and reduces build time.
```

**Bug fix with body and footer:**
```
fix(auth): prevent credential leak on logout

Ensure all session tokens are cleared from memory
when user logs out, preventing unauthorized access.

Closes #123
```

**Breaking change (triggers major version bump):**
```
feat!: redesign configuration system

BREAKING CHANGE: The config file format has changed from YAML to JSON.
See migration guide: https://example.com/migration
```

**Feature with scope and breaking change:**
```
feat(api)!: replace REST endpoints with GraphQL

BREAKING CHANGE: All REST endpoints are deprecated in favor of the new GraphQL API.
Refer to the migration guide for details.
```

### Tips

- Keep the subject line under 50 characters
- Use the imperative mood ("add" not "added")
- Don't capitalize the first letter
- Do not end with a period
- Use the body to explain *what* and *why*, not *how*
- Reference related issues and PRs in footers

## Making Changes

1. **Keep commits atomic** – each commit should represent one logical unit of work.
2. **Write clear commit messages** following the Conventional Commits format (see above).
3. **Write tests** – add or update tests for any code changes:
   - New features must include tests demonstrating they work
   - Bug fixes should include a test that catches the original issue
   - Aim for reasonable test coverage
4. **Test your changes locally** before pushing – ensure all tests pass.
5. **Write documentation**:
   - Add docstrings/comments to functions and classes
   - Update README or docs if behavior changes affect users
6. **Keep code clean** – follow language conventions and best practices (see [Code Style & Best Practices](#code-style--best-practices)).

## Submitting Pull Requests

1. **Ensure your branch is up to date**:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

3. **Create a Pull Request** on GitHub:
   - Provide a clear, descriptive title
   - Link any related issues (e.g., "Closes #456")
   - Describe the changes you've made and why

4. **Respond to feedback** – we may ask for changes or clarifications.

### PR Requirements

- All commits must follow the Conventional Commits specification
- Automated checks must pass (linting, tests, etc.)
- At least one review approval is required before merging

## Code Style & Best Practices

**Follow your language's conventions** – whether Python (PEP 8), JavaScript (ESLint), Go (gofmt), or others.

### General Guidelines

- **Use meaningful names** for variables, functions, and classes
- **Add comments** for complex logic and non-obvious decisions
- **Keep functions focused** – each should do one thing well
- **Write tests** for all new features and bug fixes (see [Making Changes](#making-changes))
- **Document your code**:
  - Add docstrings/comments to public functions and classes
  - Update README or relevant docs if your changes affect users
  - Include inline comments for tricky logic
- **Keep it DRY** – don't repeat yourself; extract common patterns into reusable functions

## Translating

<p align="center">
    <img src="https://github.com/MarkGotLasagna/holp/blob/main/.github/Translation.svg" width="200"> <br>
</p>

There are two ways you can contribute translations to HOLP. The first one is the less tedious method and suggested one. The second one makes use of some Python scripts located in the `Scripts` directory. You may ignore the below indications as long as the result is the same: a newly translated `.drawio` diagram that is almost identical to the original English version, that follows these rules.

* The translated diagram must be located inside the `Diagrams` directory.
* The diagram must be suffixed with a [ISO 639-2](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) 3-letter language code.
* The translated diagram must look as similar to the original version as possible.

Example: Mark decides he wants to contribute to the repository with an Italian translation. He clones the repository and starts working on a copy of the original diagram. When he's finished, he cleans up and saves the newly translated diagram with the following name: `Timeline-ITA.drawio`. He will later submit a pull request for evaluation and approval.

### Method 1: copy original and move to folder

1. Save a copy of the original English version `Diagrams/Timeline.drawio` and name it using the `Diagrams/Timeline-ABC.drawio` convention, where `ABC` represents the 3-letter code of the target language.
2. Translate relevant text in the diagram, move cards around to make space if needed, scale and resize images if needed.
3. Save the changes and push them to your forked repository.
4. Submit a pull request on GitHub.

### Method 2: extract text and translate

1. Run `Scripts/extract.py` to extract a JSON file containing the text to be translated. This mostly includes cards, image captions and similar.
2. Modify the JSON file by translating text into your desired language.
3. When finished, run `Scripts/update.py` to create a new diagram using your newly created translation.
4. Submit a pull request on GitHub.

Of course, you can also suggest corrections to translations using the "Issues" tab from the repository's home page. Simply add the "translation" label to your issue and submit away.

## Questions or Issues?

- **Found a bug?** Open an issue.
- **Have a question?** Feel free to start a discussion.
- **Want to suggest a feature?** Open a feature request issue.

---

Thank you for contributing! 🎉