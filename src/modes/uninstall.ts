import parse_pkg_str from "../prefab/parse-pkg-str.ts"

export default async function(pkgspecs: string[]) {
  const pkgs = await Promise.all(pkgspecs.map(x => parse_pkg_str(x, {latest: 'ok'})))

  for (const pkg of pkgs) {
    if (pkg.project == 'pkgx.sh') {
      uninstall_self()
    } else {

    }
  }
}
