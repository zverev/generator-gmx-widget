var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    createWidgetFiles: function() {
        var done = this.async();
        this.prompt({
            type: 'input',
            name: 'name',
            message: 'Your widget name',
            default: this.appname // Default to current folder name
        }, function(answers) {
            var widgetName = answers.name;
            var upperWidgetName = widgetName.charAt(0).toUpperCase() + widgetName.slice(1);
            var lowerWidgetName = widgetName.charAt(0).toLowerCase() + widgetName.slice(1);
            this.fs.copyTpl(
                this.templatePath('gulpfile.js'),
                this.destinationPath('gulpfile.js'), {
                    upperWidgetName: upperWidgetName,
                    lowerWidgetName: lowerWidgetName
                }
            );
            this.fs.copyTpl(
                this.templatePath('package.json'),
                this.destinationPath('package.json'), {
                    upperWidgetName: upperWidgetName,
                    lowerWidgetName: lowerWidgetName
                }
            );
            this.fs.copyTpl(
                this.templatePath('styles.css'),
                this.destinationPath(lowerWidgetName + '.css'), {
                    upperWidgetName: upperWidgetName,
                    lowerWidgetName: lowerWidgetName
                }
            );
            this.fs.copyTpl(
                this.templatePath('script.js'),
                this.destinationPath(upperWidgetName+ '.js'), {
                    upperWidgetName: upperWidgetName,
                    lowerWidgetName: lowerWidgetName
                }
            );
            this.fs.copyTpl(
                this.templatePath('template.html'),
                this.destinationPath(lowerWidgetName + '.html'), {
                    upperWidgetName: upperWidgetName,
                    lowerWidgetName: lowerWidgetName
                }
            );
            done();
        }.bind(this));
    }
});