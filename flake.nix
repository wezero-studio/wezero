{
  description = "Nixos dev shell for wezero.site";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
  };

  outputs = { self, nixpkgs, ...}: let
    pkgs = nixpkgs.legacyPackages."x86_64-linux";
  in {
    devShells.x86_64-linux.default = pkgs.mkShell {
      packages = with pkgs; [
	nodejs_23
	yarn
    ];

    shellHook = ''
        echo "Dev shell for wezero.studio"
        echo "Node version: $(node --version)"
        echo "Yarn version: $(yarn --version)"
    '';

    };
  };
}
