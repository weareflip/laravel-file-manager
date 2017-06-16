<?php

if (! function_exists('fm_asset')) {

    /**
     * Get path to a webpack bundle asset
     *
     * @param string $bundle Bundle name
     * @param string $type Asset type to take from the bundle ('js', 'css' or 'text')
     * @return string Path to asset
     */
    function fm_asset(string $bundle, string $type = 'js'): string
    {
        $path = __DIR__.'/../dist/manifest.json';

        if (! file_exists($path)) {
            throw new InvalidArgumentException('Unable to locate webpack manifest');
        }

        // Decode the webpack manifest
        $manifest = json_decode(file_get_contents($path));

        if (! isset($manifest->$bundle->$type)) {
            throw new InvalidArgumentException("Unable to find $bundle $type bundle");
        }

        return $manifest->$bundle->$type;
    }
}
