const getLocations = async function() {
  return [
    {
      id: 1,
      name: "Mama's fish house",
      lat: 234.6789,
      lon: 234.678,
      description: 'lorem ipsum junk here',
      times: [
        {
          open: '2019-01-25T13:00:00Z',
          close: '2019-01-25T15:00:00Z',
        },
        {
          open: '2019-01-26T13:00:00Z',
          close: '2019-01-26T15:00:00Z',
        },
      ],
      photos: [
        {
          url: 'https://example.com/somephoto.jpg',
          description: 'lorem ipsum',
        },
      ],
      reviews: [{}],
      rating: 4.4,
    },
    {
      id: 2,
      name: "Mama's fish house",
      lat: 234.6789,
      lon: 234.678,
      description: 'lorem ipsum junk here',
      times: [
        {
          open: '2019-01-25T13:00:00Z',
          close: '2019-01-25T15:00:00Z',
        },
        {
          open: '2019-01-26T13:00:00Z',
          close: '2019-01-26T15:00:00Z',
        },
      ],
      photos: [
        {
          url: 'https://example.com/somephoto.jpg',
          description: 'lorem ipsum',
        },
      ],
      reviews: [{}],
      rating: 4.4,
    },
  ];
};

export { getLocations };
