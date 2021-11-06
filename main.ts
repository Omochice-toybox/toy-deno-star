async function star(owner: string, repo: string, toke: string) {
  const url = `https://api.github.com/user/starred/${owner}/${repo}`;
  const rst = await fetch(
    url,
    {
      headers: new Headers({
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.v3+json",
      }),
      method: "PUT",
    },
  );
  console.log(rst.status);
}

const token = Deno.env.get("GITHUB_TOKEN") || "";

for (const arg of Deno.args) {
  const [owner, repo] = arg.split("/");
  star(owner, repo, token);
}
