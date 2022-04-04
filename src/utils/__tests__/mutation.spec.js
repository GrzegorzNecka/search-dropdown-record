const user = {
  name: 'Kuba',
  channel: 'JS Dżem',
  language: 'Polish',
};

// const justMutateUser = (user) => {
//   user.name = 'Marcin';
// };

// const mutateAndReturnUser = (user) => {
//   return user.name = 'Marcin';
// };

const returnNewUser = (user) => {
  //ta funkcja nie mutuje usera
  return {
    ...user,
    name: 'Marcin',
  };
};

it('Test against mutation', () => {
  expect(user).toEqual({
    name: 'Kuba',
    channel: 'JS Dżem',
    language: 'Polish',
  });

  const user2 = returnNewUser(user);

  expect(user).toEqual({
    name: 'Kuba',
    channel: 'JS Dżem',
    language: 'Polish',
  });

  expect(user2).toEqual({
    name: 'Marcin',
    channel: 'JS Dżem',
    language: 'Polish',
  });
});
