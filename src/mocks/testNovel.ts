import { NovelType } from './../types/types';
const novels: NovelType[] = [
  {
    id: 'demo',
    name: 'Demo Novel',
    scenes: {
      start: {
        image: 'https://images.unsplash.com/photo-1560972550-aba3456b5564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjc5NjV9&auto=format&fit=crop&w=1350&q=80',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        buttons: [
          {
            text: 'Next scene',
            redirectId: 'scene1',
          },
        ],
      },
      scene1: {
        image: 'https://images.unsplash.com/photo-1519949387774-80d5c79b8a8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
        buttons: [
          {
            text: 'First choice',
            redirectId: 'scene2',
          },
          {
            text: 'Second choice',
            redirectId: 'final',
          },
        ],
      },
      scene2: {
        image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        text: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
        buttons: [
          {
            text: 'Do it!',
            redirectId: 'final',
          },
        ],
      },
      final: {
        image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1369&q=80',
        text: 'Its final scene',
        buttons: [
          {
            text: 'Go Back',
            redirectId: 'scene2',
          },
          {
            text: 'Go to Start',
            redirectId: 'start',
          },
        ],
      }
    },
  },
];

export default novels;
