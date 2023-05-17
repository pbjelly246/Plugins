//=============================================================================
// Custom Options Window
// Plugin by: OpenAI (adapted from RPG Maker MZ default code)
//=============================================================================
/*:
 * @target MZ
 * @plugindesc Allows customization of the options window size and position.
 * 
 * @help
 * This plugin allows you to customize the position and size of the options window
 * and the options category window. You can adjust the values of the plugin
 * parameters to set the desired position (X, Y) and dimensions (Width, Height)
 * for both windows.
 *
 * Note: Changing the options window size may require adjusting the layout of the
 * command choices within the window to fit properly. This plugin only handles
 * the options window position and size, not the command choices themselves.
 * 
 * @param Hpadding
 * @text Horizontal Padding
 * @desc The horizontal padding from each edge. If you put 50, it'll bring the
 * window in 50 pixels from the left and right edge.
 * @type number
 * @default 50
 * 
 * @param Vpadding
 * @text Vertical Padding
 * @desc The horizontal padding from each edge. If you put 50, it'll bring the
 * window in 50 pixels from the top and bottom edge.
 * @type number
 * @default 50
 * 
 */

(() => {
  const pluginName = "Adjust_VOptions";
  const parameters = PluginManager.parameters(pluginName);
  const Hpadding = Number(parameters["Hpadding"]) || 50;
  const Vpadding = Number(parameters["Vpadding"]) || 50;

  const _Scene_Options_createCategoryWindow = Scene_Options.prototype.createCategoryWindow;
  Scene_Options.prototype.createCategoryWindow = function() {
    _Scene_Options_createCategoryWindow.call(this);
    this._categoryWindow.y = Vpadding;
    this._categoryWindow.width =  Math.round((Graphics.boxWidth - Hpadding * 2));
    this._categoryWindow.height = Math.round(this._categoryWindow.lineHeight() + this._categoryWindow.padding * 3);
    this._categoryWindow.x = Math.round((Graphics.boxWidth / 2) - (this._categoryWindow.width / 2));
  };

  const _Scene_Options_createOptionsWindow = Scene_Options.prototype.createOptionsWindow;
  Scene_Options.prototype.createOptionsWindow = function() {
    _Scene_Options_createOptionsWindow.call(this);
    this._optionsWindow.x = this._categoryWindow.x;
    this._optionsWindow.y = this._categoryWindow.y + this._categoryWindow.height;
    this._optionsWindow.width = this._categoryWindow.width;
    this._optionsWindow.height =  Math.round(Graphics.boxHeight - this._optionsWindow.y - Vpadding);
  };
  })();
