import { Box, Container } from '@chakra-ui/react';

import Example from '../../docs/example.mdx';

const Contents = () => {
	return (
		<Container>
			<Box className='markdown-body'>
				<Example />
			</Box>
		</Container>
	);
};

export default Contents;
