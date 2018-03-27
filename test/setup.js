import { jsdom } from 'jsdom'
import Janus from '../src/utils/janus'

global.document = jsdom('<!doctype html><html><body></body></html>')
global.window = document.defaultView
global.navigator = global.window.navigator