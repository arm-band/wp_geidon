<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php bloginfo( 'name' ); ?></title>
    <meta description="<?php bloginfo( 'description' ); ?>">
    <link rel="stylesheet" href="<?= get_template_directory_uri(); ?>/css/index.css" media="screen" />
    <?php wp_head(); ?>
</head>
<body>
    <header class="l-header">
        <h1><?php bloginfo( 'name' ); ?></h1>
    </header>
    <div class="l-eyecatch"></div>
    <main class="l-main">
        <p><?= "蚕食鯨呑。"; ?></p>
        <p id="geiin"></p>
    </main>
    <footer class="l-footer">
        © 2020 <?php bloginfo( 'name' ); ?>
    </footer>
    <?php wp_footer(); ?>
</body>
</html>
