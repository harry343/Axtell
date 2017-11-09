from flask import Flask, url_for
from flask_assets import Environment, Bundle
from os import path, getcwd

class PPCGFlask(Flask):
    template_folder="assets/templates"

server = PPCGFlask("PPCG v2")

# Flask Assets
assets = Environment(server)

nodebin = path.join(getcwd(), 'node_modules', '.bin')
# CSS
css = Bundle('scss/main.scss', filters='scss,autoprefixer,cleancss', output='css/all.css')
css.config['CLEANCSS_BIN'] = path.join(nodebin, 'cleancss')
css.config['AUTOPREFIXER_BIN'] = path.join(nodebin, 'autoprefixer-cli')
css.config['AUTOPREFIXER_BROWSERS'] = ['> 1%']
assets.register('css_all', css)
