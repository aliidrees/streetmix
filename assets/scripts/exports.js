/**
 * exports.js
 *
 * A shim for exporting browserify modules to the global scope that are
 * required / imported while we're transitioning to a module bundler
 * Only keep imports that are needed and please remove them at earliest
 * convenience
 */
import $ from 'jquery'
window.$ = $

import _ from 'lodash'
window._ = _

import { isblockingAjaxRequestInProgress, newBlockingAjaxRequest } from './util/fetch_blocking'
window.isblockingAjaxRequestInProgress = isblockingAjaxRequestInProgress
window._newBlockingAjaxRequest = newBlockingAjaxRequest

import { newNonblockingAjaxRequest, getNonblockingAjaxRequestCount } from './util/fetch_nonblocking'
window._newNonblockingAjaxRequest = newNonblockingAjaxRequest
window._getNonblockingAjaxRequestCount = getNonblockingAjaxRequestCount

import { trackEvent } from './app/event_tracking'
window.trackEvent = trackEvent

import { loseAnyFocus, isFocusOnBody } from './app/focus'
window._loseAnyFocus = loseAnyFocus
window._isFocusOnBody = isFocusOnBody

import { goNewStreet } from './app/routing'
window.goNewStreet = goNewStreet

import { showStatusMessage, hideStatusMessage } from './app/status_message'
window.showStatusMessage = showStatusMessage
window.hideStatusMessage = hideStatusMessage

import { ERRORS, showError, hideError, showErrorFromUrl } from './app/errors'
window.ERRORS = ERRORS
window._showError = showError
window._hideError = hideError
window._showErrorFromUrl = showErrorFromUrl

import { getElAbsolutePos, normalizeSlug } from './util/helpers'
window._getElAbsolutePos = getElAbsolutePos
window.normalizeSlug = normalizeSlug

// Gallery
import { showGallery } from './gallery/view'
window._showGallery = showGallery

// Menus
import { isAnyMenuVisible, hideAllMenus } from './menus/menu'
window.isAnyMenuVisible = isAnyMenuVisible
window.hideAllMenus = hideAllMenus

import { shareMenu } from './menus/_share'
window.shareMenu = shareMenu

// Dialogs
import { isAnyDialogVisible, hideAllDialogs } from './dialogs/dialog'
window.isAnyDialogVisible = isAnyDialogVisible
window.hideAllDialogs = hideAllDialogs

import { aboutDialog } from './dialogs/_about'
window.aboutDialog = aboutDialog

import { fetchAvatars, receiveAvatar } from './users/avatars'
window._fetchAvatars = fetchAvatars
window._receiveAvatar = receiveAvatar

import {
  makeDefaultStreet,
  NEW_STREET_DEFAULT,
  NEW_STREET_EMPTY,
  onNewStreetDefaultClick,
  onNewStreetEmptyClick,
  onNewStreetLastClick
} from './streets/creation'
window._makeDefaultStreet = makeDefaultStreet
window._onNewStreetDefaultClick = onNewStreetDefaultClick
window._onNewStreetEmptyClick = onNewStreetEmptyClick
window._onNewStreetLastClick = onNewStreetLastClick
window.NEW_STREET_DEFAULT = NEW_STREET_DEFAULT
window.NEW_STREET_EMPTY = NEW_STREET_EMPTY

import { updateStreetMetadata } from './streets/metadata'
window._updateStreetMetadata = updateStreetMetadata

import { StreetName } from './streets/name_sign'
window.StreetName = StreetName

import { updateStreetName } from './streets/name'
window._updateStreetName = updateStreetName

import { onStreetSectionScroll } from './streets/scroll'
window._onStreetSectionScroll = onStreetSectionScroll

import {
  infoBubble,
  INFO_BUBBLE_TYPE_SEGMENT,
  INFO_BUBBLE_TYPE_LEFT_BUILDING
} from './info_bubble/info_bubble'
window._infoBubble = infoBubble
window.INFO_BUBBLE_TYPE_SEGMENT = INFO_BUBBLE_TYPE_SEGMENT
window.INFO_BUBBLE_TYPE_LEFT_BUILDING = INFO_BUBBLE_TYPE_LEFT_BUILDING

import {
  BUILDING_SPACE,
  DEFAULT_BUILDING_HEIGHT_LEFT,
  DEFAULT_BUILDING_HEIGHT_RIGHT,
  DEFAULT_BUILDING_VARIANT_LEFT,
  DEFAULT_BUILDING_VARIANT_RIGHT,
  DEFAULT_BUILDING_HEIGHT_EMPTY,
  DEFAULT_BUILDING_VARIANT_EMPTY,
  changeBuildingHeight,
  createBuildings,
  onBuildingMouseEnter,
  onBuildingMouseLeave,
  updateBuildingPosition
} from './segments/buildings'
window.BUILDING_SPACE = BUILDING_SPACE
window.DEFAULT_BUILDING_HEIGHT_LEFT = DEFAULT_BUILDING_HEIGHT_LEFT
window.DEFAULT_BUILDING_HEIGHT_RIGHT = DEFAULT_BUILDING_HEIGHT_RIGHT
window.DEFAULT_BUILDING_VARIANT_LEFT = DEFAULT_BUILDING_VARIANT_LEFT
window.DEFAULT_BUILDING_VARIANT_RIGHT = DEFAULT_BUILDING_VARIANT_RIGHT
window.DEFAULT_BUILDING_HEIGHT_EMPTY = DEFAULT_BUILDING_HEIGHT_EMPTY
window.DEFAULT_BUILDING_VARIANT_EMPTY = DEFAULT_BUILDING_VARIANT_EMPTY
window._changeBuildingHeight = changeBuildingHeight
window._createBuildings = createBuildings
window._onBuildingMouseEnter = onBuildingMouseEnter
window._onBuildingMouseLeave = onBuildingMouseLeave
window._updateBuildingPosition = updateBuildingPosition

import { drawProgrammaticPeople } from './segments/people'
window.drawProgrammaticPeople = drawProgrammaticPeople

import { getVariantString, getVariantArray } from './segments/variant_utils'
window._getVariantString = getVariantString
window._getVariantArray = getVariantArray

import { processWidthInput, prettifyWidth, undecorateWidth } from './util/width_units'
window._processWidthInput = processWidthInput
window._prettifyWidth = prettifyWidth
window.undecorateWidth = undecorateWidth

import { removeElFromDOM } from './util/dom_helpers'
window.removeElFromDOM = removeElFromDOM

import { generateRandSeed } from './util/random'
window.generateRandSeed = generateRandSeed
