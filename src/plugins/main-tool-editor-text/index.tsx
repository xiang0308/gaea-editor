import { Connect } from "dynamic-react"
import * as _ from "lodash"
import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Styled from "./index.style"
import { Props, State } from "./index.type"

@Connect
class MainToolEditorText extends React.Component<Props, State> {
  public static defaultProps = new Props()
  public state = new State()

  /**
   * 组件的类
   */
  private componentClass: React.ComponentClass<IGaeaProps>

  /**
   * 组件实例的信息
   */
  private instanceInfo: InstanceInfo

  public handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.props.actions.ViewportAction.setInstanceProps(this.props.stores.ViewportStore.currentEditInstanceKey, this.props.editor.field, event.currentTarget.value)
  }

  public render() {
    this.instanceInfo = this.props.stores.ViewportStore.instances.get(this.props.stores.ViewportStore.currentEditInstanceKey)
    this.componentClass = this.props.actions.ApplicationAction.getComponentClassByKey(this.instanceInfo.gaeaKey)

    return (
      <Styled.Container>
        <Styled.Label>
          {this.props.editor.label}
        </Styled.Label>
        <Styled.Input value={this.props.actions.ViewportAction.getInstanceProps(this.props.stores.ViewportStore.currentEditInstanceKey, this.props.editor.field)} onChange={this.handleChange} />
      </Styled.Container>
    )
  }
}

export default {
  position: "mainToolEditorText",
  class: MainToolEditorText
}
