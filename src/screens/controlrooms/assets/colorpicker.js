import { ColorPicker } from 'react-native-color-picker';

const Picky = () => (
    <ColorPicker
      onColorSelected={color => alert(`Color selected: ${color}`)}
      style={{flex: 1}}
    />
  )
export default Picky;