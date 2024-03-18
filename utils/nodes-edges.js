const position = { x: 0, y: 0 };
const edgeType = 'smoothstep';

export const initialNodes = [
    {
        id: '1',
        data: { label: 'Research' },
        position,
        style: {backgroundColor: "#2a4494", borderColor: "#2a4494", color:"white"}
    },
    {
        id: '2',
        data: {label: 'Planning'},
        position,
        style: {backgroundColor: "#82b3e8", borderColor: "#82b3e8", color:"white"}
    },
    {
        id: '3',
        data: {label: 'Designing'},
        position,
        style: {backgroundColor: "#dc6347", borderColor: "#dc6347", color:"white"}
    },
    {
        id: '4',
        data: {label: 'Manufacturing'},
        position,
        style: {backgroundColor: "#e8919d", borderColor: "#e8919d", color:"white"}
    },
    {
        id: '5',
        data: {label: 'Sales/Marketing'},
        position,
        style: {backgroundColor: "#a684eb", borderColor: "#a684eb", color:"white"}
    },
    {
        id: '6',
        data: {label: 'External'},
        position,
        style: {backgroundColor: "#2a4494", borderColor: "#2a4494", color:"white"}
    },
    {
        id: '7',
        data: {label: 'Internal'},
        position,
        style: {backgroundColor: "#2a4494", borderColor: "#2a4494", color:"white"}
    },
    {
        id: '8',
        data: {label: 'PRD'},
        position,
        style: {backgroundColor: "#82b3e8", borderColor: "#82b3e8", color:"white"}
    },
    {
        id: '9',
        data: {label: 'Specs'},
        position,
        style: {backgroundColor: "#82b3e8", borderColor: "#82b3e8", color:"white"}
    },
    {
        id: '10',
        data: {label: 'Hardware'},
        position,
        style: {backgroundColor: "#82b3e8", borderColor: "#82b3e8", color:"white"},

    },
    {
        id: '11',
        data: {label: 'Software'},
        position,
        style: {backgroundColor: "#82b3e8", borderColor: "#82b3e8", color:"white"}
    },
    {
        id: '12',
        data: {label: 'Material'},
        position,
        style: {backgroundColor: "#e8919d", borderColor: "#e8919d", color:"white"}
    },
    {
        id: '13',
        data: {label: 'Production'},
        position,
        style: {backgroundColor: "#e8919d", borderColor: "#e8919d", color:"white"}
        
    },
    {
        id: '14',
        data: {label: 'Online'},
        position,
        style: {backgroundColor: "#a684eb", borderColor: "#a684eb", color:"white"}
    },
    {
        id: '15',
        data: {label: 'Dealership'},
        position,
        style: {backgroundColor: "#a684eb", borderColor: "#a684eb", color:"white"}
    },
    {
        id: '16',
        data: {label: 'B2C'},
        position,
        style: {backgroundColor: "#2a4494", borderColor: "#2a4494", color:"white"}
    },
    {
        id: '17',
        data: {label: 'B2C'},
        position,
        style: {backgroundColor: "#2a4494", borderColor: "#2a4494", color:"white"}
    },
    {
        id: '18',
        data: {label: 'Online'},
        position,
        style: {backgroundColor: "#2a4494", borderColor: "#2a4494", color:"white"}
    },
    {
        id: '19',
        data: {label: 'Interview'},
        position,
        style: {backgroundColor: "#2a4494", borderColor: "#2a4494", color:"white"}
    },
    {
        id: '20',
        data: {label: 'Public Data'},
        position,
        style: {backgroundColor: "#2a4494", borderColor: "#2a4494", color:"white"}
    },
    {
        id: '21',
        data: {label: 'Health'},
        position,
        style: {backgroundColor: "#2a4494", borderColor: "#2a4494", color:"white"}
    },
]

// export const initialNodes2 = [
//   {
//     id: '1',
//     type: 'input',
//     data: { label: 'input' },
//     position,
//   },
//   {
//     id: '2',
//     data: { label: 'node 2' },
//     position,
//   },
//   {
//     id: '2a',
//     data: { label: 'node 2a' },
//     position,
//   },
//   {
//     id: '2b',
//     data: { label: 'node 2b' },
//     position,
//   },
//   {
//     id: '2c',
//     data: { label: 'node 2c' },
//     position,
//   },
//   {
//     id: '2d',
//     data: { label: 'node 2d' },
//     position,
//   },
//   {
//     id: '3',
//     data: { label: 'node 3' },
//     position,
//   },
//   {
//     id: '4',
//     data: { label: 'node 4' },
//     position,
//   },
//   {
//     id: '5',
//     data: { label: 'node 5' },
//     position,
//   },
//   {
//     id: '6',
//     type: 'output',
//     data: { label: 'output' },
//     position,
//   },
//   { id: '7', type: 'output', data: { label: 'output' }, position },
// ];

// export const initialEdges = [
//   { id: 'e12', source: '1', target: '2', type: edgeType, animated: true },
//   { id: 'e13', source: '1', target: '3', type: edgeType, animated: true },
//   { id: 'e22a', source: '2', target: '2a', type: edgeType, animated: true },
//   { id: 'e22b', source: '2', target: '2b', type: edgeType, animated: true },
//   { id: 'e22c', source: '2', target: '2c', type: edgeType, animated: true },
//   { id: 'e2c2d', source: '2c', target: '2d', type: edgeType, animated: true },
//   { id: 'e45', source: '4', target: '5', type: edgeType, animated: true },
//   { id: 'e56', source: '5', target: '6', type: edgeType, animated: true },
//   { id: 'e57', source: '5', target: '7', type: edgeType, animated: true },
// ];

export const initialEdges = [
     {id : 'e16', source:'1', target: '6', type: 'edgeType', animated: true},
     {id : 'e17', source:'1', target: '7', type: 'edgeType', animated: true},
     {id : 'e28', source:'2', target: '8', type: 'edgeType', animated: true},
     {id : 'e29', source:'2', target: '9', type: 'edgeType', animated: true},
     {id : 'e310', source:'3', target: '10', type: 'edgeType', animated: true},
     {id : 'e311', source:'3', target: '11', type: 'edgeType', animated: true},
     {id : 'e412', source:'4', target: '12', type: 'edgeType', animated: true},
     {id : 'e413', source:'4', target: '13', type: 'edgeType', animated: true},
     {id : 'e514', source:'5', target: '14', type: 'edgeType', animated: true},
     {id : 'e515', source:'5', target: '15', type: 'edgeType', animated: true},
     {id : 'e616', source:'6', target: '16', type: 'edgeType', animated: true},
     {id : 'e617', source:'6', target: '17', type: 'edgeType', animated: true},
     {id : 'e1718', source:'17', target: '18', type: 'edgeType', animated: true},
     {id : 'e1719', source:'17', target: '19', type: 'edgeType', animated: true},
     {id : 'e1720', source:'17', target: '20', type: 'edgeType', animated: true},
     {id : 'e1721', source:'17', target: '21', type: 'edgeType', animated: true},

    ]