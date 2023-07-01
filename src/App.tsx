import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import Wrapper from './container/wrapper';

const theme = extendTheme({
	styles: {
		global: {
			'.mdx-content': {
				h1: {
					fontSize: '2xl',
					fontWeight: 'bold',
					mb: '4',
				},
				h2: {
					fontSize: 'xl',
					fontWeight: 'bold',
				},
				h3: {
					fontSize: 'lg',
					fontWeight: 'bold',
				},
				h4: {
					fontSize: 'md',
					fontWeight: 'bold',
				},
				h5: {
					fontSize: 'sm',
					fontWeight: 'bold',
				},
				h6: {
					fontSize: 'xs',
					fontWeight: 'bold',
				},
			},
		},
	},
	config: {
		initialColorMode: 'dark',
	},
});

function App() {
	return (
		<ChakraProvider theme={theme}>
			<Wrapper />
		</ChakraProvider>
	);
}

export default App;
