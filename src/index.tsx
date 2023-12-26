import { createRoot } from 'react-dom/client';
import App from './App';

function render(
  rootEl: Element | DocumentFragment,
) {

  const root = createRoot(rootEl);
  root.render(<App />);
}

export default render;
