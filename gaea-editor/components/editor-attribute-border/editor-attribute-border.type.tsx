import * as React from 'react'
import * as EditorManager from '../../../gaea-editor-manager/gaea-editor-manager'

export interface PropsDefine {
    ViewportStore?: EditorManager.ViewportStore
    ViewportAction?: EditorManager.ViewportAction
    ApplicationStore?: EditorManager.ApplicationStore
    ApplicationAction?: EditorManager.ApplicationAction

    editInfo?: FitGaea.ComponentPropsGaeaEdit
}

export class Props implements PropsDefine {

}

export interface StateDefine {

}

export class State implements StateDefine {

}