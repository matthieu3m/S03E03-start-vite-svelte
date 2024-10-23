import { render, fireEvent } from '@testing-library/svelte';
import App from '../App.svelte';
import { expect, test } from 'vitest';
import { TextEncoder, TextDecoder } from 'util';

// Polyfills pour TextEncoder et TextDecoder
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

test('incrémente le compteur', async () => {
    const { getByText } = render(App);
    const button = getByText('Incrémenter');
    
    await fireEvent.click(button);
    
    expect(getByText('1')).toBeInTheDocument();
});
