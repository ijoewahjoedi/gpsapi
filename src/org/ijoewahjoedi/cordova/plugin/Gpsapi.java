package org.ijoewahjoedi.cordova.plugin;

import org.apache.cordova.api.CordovaPlugin;
import org.apache.cordova.api.PluginResult;
import org.apache.cordova.api.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * This class is an interface for Android GPS sensor
 */

public class Gpsapi extends CordovaPlugin {
  @Override
  public boolean execute (String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
    if (action.equals("echo")) {
      String message = args.getString(0);
      this.echo(message callbackContext);
      return true;
    }
    return false;
  }

  private void echo (String message, CallbackContext callbackContext) {
    if (message != null && message.length() > 0) {
      callbackContext.success(message);
    } else {
      callbackContext.error("Expected one non-empty string argument.");
    }
  }


}


