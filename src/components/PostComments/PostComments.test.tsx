import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';


const setComment = (comment: string) => {

    fireEvent.change(screen.getByTestId('textarea-comment'), {
        target: {
            value: comment
        }
    });
    fireEvent.click(screen.getByTestId('button-comment'));
}


describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    
    test('Deve renderizar 2 comentários (2 componentes li)', () => {
        render(<PostComment />);

        setComment('Comentário 1');
        setComment('Comentário 2');
        
        expect(screen.getAllByTestId('li-comment')).toHaveLength(2);
    })
});