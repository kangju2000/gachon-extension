import { createRoot } from 'react-dom/client'

import Popup from './Popup'
import { ContentThemeProvider } from '@/components/ContentThemeProvider'
import styles from '@/styles/index.css?inline'
import createShadowRoot from '@/utils/createShadowRoot'

const shadowRoot = createShadowRoot([styles])

createRoot(shadowRoot).render(
  <ContentThemeProvider>
    <Popup />
  </ContentThemeProvider>,
)
