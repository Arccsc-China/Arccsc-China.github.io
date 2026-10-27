export const entries = [
  {
    id: 'hri',
    category: 'research',
    title: 'Operational Environment Recognition for Human-Robot Collaboration Based on Human Physiological Sensory Feedback',
    shortTitle: 'Reading the environment through human signals',
    kind: 'MSc thesis',
    year: '2025',
    summary: 'Recognising environmental noise during human–robot collaboration through motion, EMG and torque signals.',
    paragraphs: [
      'This MSc thesis investigated whether human physiological feedback could help robots recognise environmental noise conditions during collaborative tasks.',
      'I designed a feature extraction pipeline combining motion, EMG and torque signals, using variational autoencoders alongside handcrafted statistical features. My work covered data processing, algorithm implementation and performance evaluation.',
      'Classifier-based recognition achieved reported F1-scores of 0.7–0.8. The analysis examined feature contribution and cross-subject generalisation, supporting further work on multimodal signal analysis for adaptive robotics.',
    ],
    image: 'images/dissertation.gif',
    imageAlt: 'Overview of physiological-signal environment recognition for human–robot collaboration',
    tags: ['Human–robot interaction', 'Machine learning', 'Multimodal signals', 'EMG', 'Variational autoencoders'],
    links: [{ label: 'Read thesis', href: 'docs/11548302.pdf' }],
  },
  {
    id: 'workflow',
    category: 'research',
    title: 'WorkflowLLM: Enhancing Workflow Orchestration Capability of Large Language Models',
    shortTitle: 'WorkflowLLM',
    kind: 'Research contribution',
    year: '2024',
    summary: 'Building a workflow benchmark from Apple Shortcuts to support large language model training.',
    paragraphs: [
      'This 2024 project explored workflow orchestration with large language models through a database benchmark built from Apple Shortcuts workflows. The work was published at ICLR 2025.',
      'I contributed to the collection and organisation of workflow files, statistical decoding of source files and data generation. This work supported the training of models that construct workflows and developed my experience in data management and quantitative analysis.',
    ],
    image: 'images/workflowLLM-demo.gif',
    imageAlt: 'WorkflowLLM workflow orchestration demonstration',
    tags: ['Large language models', 'Workflow orchestration', 'Apple Shortcuts', 'Data curation', 'ICLR 2025'],
    links: [{ label: 'Read paper', href: 'docs/2616_WorkflowLLM_Enhancing_Wor.pdf' }],
  },
  {
    id: 'vision',
    category: 'research',
    title: 'From SIFT–BoW to End-to-End CNNs: A Comparative Study on Standard Vision Benchmarks',
    shortTitle: 'From handcrafted features to CNNs',
    kind: 'Course project',
    year: '2025',
    summary: 'Comparing SIFT–Bag-of-Words pipelines with fine-tuned CNNs across standard visual recognition benchmarks.',
    paragraphs: [
      'For the Cognitive Robots and Computer Vision course, I compared traditional SIFT–Bag-of-Words methods with deep learning architectures on CIFAR-10, CIFAR-100, MS COCO and iCubWorld.',
      'I implemented classical feature extraction and encoding pipelines alongside fine-tuned CNNs. Evaluation covered accuracy, F1-score, mean average precision, training time and inference speed, examining the trade-offs between computational cost and recognition performance in robot vision.',
    ],
    image: 'images/CV-essay.gif',
    imageAlt: 'Comparison of classical computer vision methods and convolutional neural networks',
    tags: ['Computer vision', 'SIFT', 'Bag-of-Words', 'CNNs', 'Visual recognition'],
    links: [{ label: 'Read report', href: 'docs/11548302-CRCV-CW.pdf' }],
  },
  {
    id: 'multi-robot',
    category: 'research',
    title: 'A Comprehensive Research about Multi-Robot Control Models',
    shortTitle: 'Multi-robot control models',
    kind: 'Research project',
    year: '2023',
    summary: 'A team-led comparative study of control methods for multi-robot systems.',
    paragraphs: [
      'My team selected multi-robot control models as the focus of a collaborative research project. We compared control methodologies and documented their application to multi-robot systems.',
      'As team leader, I coordinated research assignments, monitored progress and authored technical documentation. The study was published at the International Conference on Image, Algorithms and Artificial Intelligence (ICIAAI 2023).',
    ],
    image: 'images/multi-robot-control-demo.gif',
    imageAlt: 'Multi-robot control research demonstration',
    tags: ['Multi-robot systems', 'Control', 'Comparative research', 'Team leadership'],
    links: [{ label: 'Read paper', href: 'docs/A Comprehensive Research about Multi-Robot Control Models.pdf' }],
  },
  {
    id: 'federated',
    category: 'research',
    title: 'A performance study of algorithms and frameworks for federated learning',
    shortTitle: 'Federated learning in IoT',
    kind: 'Research project',
    year: '2023',
    summary: 'Analysing federated learning algorithms and frameworks in the context of IoT and serverless computing.',
    paragraphs: [
      'Following an intensive week of in-person research training in IoT technology, I conducted an independent study of federated learning algorithms and serverless computing in IoT systems.',
      'The work focused on performance analysis of federated learning algorithms and culminated in an academic paper. It was published in Applied and Computational Engineering, volume 40, pages 155–161, in 2024.',
    ],
    image: 'images/FL-demo.gif',
    imageAlt: 'Federated learning algorithms and frameworks study',
    tags: ['Federated learning', 'Distributed machine learning', 'IoT', 'Serverless computing'],
    links: [{ label: 'Read paper', href: 'docs/A performance study of algorithms and frameworks for federated learning.pdf' }],
  },
  {
    id: 'leo',
    category: 'projects',
    title: 'Robot Systems Design Project (Leo Rover)',
    shortTitle: 'Leo Rover: mapping & navigation',
    kind: 'Robotics engineering',
    year: '',
    summary: 'Developing mapping and navigation capabilities for an autonomous Leo Rover.',
    paragraphs: [
      'This team project followed the stages of robot engineering, from requirements analysis to hardware and software assembly and design.',
      'I contributed the mapping and navigation capabilities needed for autonomous operation. My responsibilities included designing and implementing algorithms, preparing technical documentation and recording project progress, with a focus on localisation and path planning.',
    ],
    image: 'images/leo-project-demo.gif',
    imageAlt: 'Leo Rover robot systems design project demonstration',
    tags: ['Robotics', 'Mapping', 'Navigation', 'Localisation', 'Path planning'],
    links: [
      { label: 'View code', href: 'https://github.com/Junzhe-Yan/RobotDesignProject_Team11' },
      { label: 'Watch demonstration', href: 'video/Leo-Rover-demo.mp4' },
    ],
  },
  {
    id: 'flight',
    category: 'projects',
    title: 'A Study on Feedback Control in Flight—LQR Simulation & PID Field Test',
    shortTitle: 'Drone feedback control',
    kind: 'Robotics engineering',
    year: '',
    summary: 'Combining LQR simulation and PID field testing to investigate feedback control for drone flight.',
    paragraphs: [
      'This project investigated feedback control strategies for drone flight through simulation and physical testing.',
      'I developed and tuned an LQR controller for a Tello drone in simulation and collaborated with teammates to refine a PID controller. The work provided practical experience in controller design, simulation-to-real transfer and collaborative system optimisation.',
    ],
    image: 'images/AMR.gif',
    imageAlt: 'Drone feedback control simulation and field testing demonstration',
    tags: ['Feedback control', 'LQR', 'PID', 'Tello drone', 'Simulation'],
    links: [],
  },
  {
    id: 'lidar',
    category: 'projects',
    title: 'A Study on the Characterisation of the SLAMTEC RPLIDAR A2M12 for Robotic Applications',
    shortTitle: 'RPLIDAR A2M12 characterisation',
    kind: 'Sensor evaluation',
    year: '',
    summary: 'Evaluating lidar performance through empirical measurements and comparison with manufacturer specifications.',
    paragraphs: [
      'I characterised a SLAMTEC RPLIDAR A2M12 to assess its suitability for robotic applications.',
      'The work involved empirical measurements of sensor parameters and comparisons with manufacturer specifications. I analysed performance metrics to assess the sensor’s viability in a robotics application, building experience in data acquisition and analytical evaluation.',
    ],
    image: 'images/rplidar-demo.gif',
    imageAlt: 'SLAMTEC RPLIDAR A2M12 sensor characterisation demonstration',
    tags: ['Lidar', 'Sensor characterisation', 'Data acquisition', 'Robotics'],
    links: [{
      label: 'Watch video',
      href: 'https://www.dropbox.com/scl/fi/arfg0ggjve3dvh3gguvym/V2-A-Study-on-the-Characterisation-of-the-SLAMTEC-RPLIDAR-A2M12-Lidar-Unit-for-Robotic-Applications.mp4?rlkey=e1wp10etlu935jpkrc757s1hc&st=o9ae2qyd&dl=0',
    }],
  },
  {
    id: 'sustainability',
    category: 'projects',
    title: 'Robotic Systems for Sustainable Development',
    shortTitle: 'Robotics for clean water',
    kind: 'Research & communication',
    year: '',
    summary: 'Investigating how robotics can support SDG 6 and communicating the findings through video.',
    paragraphs: [
      'I examined the United Nations Sustainable Development Goals and selected SDG 6: Clean Water and Sanitation for focused research into the potential contribution of robotics.',
      'I analysed the potential impacts of robotic systems, synthesised the findings and produced a popular science video to communicate the research to a broader audience. The project combined sustainability research with scientific communication and public engagement.',
    ],
    image: 'images/SDG6-democlip-low-res.gif',
    imageAlt: 'Robotics and Sustainable Development Goal 6 science communication video',
    tags: ['Sustainability', 'SDG 6', 'Clean water', 'Science communication', 'Robotics'],
    links: [{
      label: 'Watch video',
      href: 'https://www.dropbox.com/scl/fi/g0zueakshgvij1c891xgh/Robotic-System-for-Sustainable-Development.mp4?rlkey=umojh5x0xnp3ljxod4qqboisq&st=wnraf3aa&dl=0',
    }],
  },
];

export function searchEntries(query, category = 'all') {
  const tokens = query.trim().toLowerCase().split(/\s+/).filter(Boolean);

  return entries.filter((entry) => {
    if (category !== 'all' && entry.category !== category) return false;

    const text = [
      entry.title, entry.shortTitle, entry.kind, entry.year, entry.category,
      entry.summary, ...entry.paragraphs, entry.imageAlt, ...entry.tags,
      ...entry.links.map((link) => link.label),
    ].join(' ').toLowerCase();

    return tokens.every((token) => text.includes(token));
  });
}
