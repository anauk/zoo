import gql from 'graphql-tag';

const CardsQuery = gql`
{
cards{
        title
        image
        logo
        caption
        subtitle
}
}`;

export { CardsQuery }
