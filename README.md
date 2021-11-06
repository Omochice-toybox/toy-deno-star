# toy-deno-star

This repo is a toy code to star a repository.

## Dependency

- Deno

```
deno 1.15.1 (release, x86_64-unknown-linux-gnu)
v8 9.5.172.19
typescript 4.4.2
```

- `$GITHUB_TOKEN`
    
Need github parsonal token that have scope `public_repo`.
And, register it as an environment variable named `$GITHUB_TOKEN`.

## Use

```sh
deno run -A main.ts owner/repo ...
```

you can specify multiple repository names.
