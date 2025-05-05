import { useState } from 'react'

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null)

  const blogPosts = [
    {
      id: 1,
      title: "Software Engineering Class in WMSU",
      date: "March 15, 2022",
      summary: "Exploring the fundamentals of software engineering at Western Mindanao State University.",
      content: "The Software Engineering class at WMSU provides students with a comprehensive understanding of software development methodologies, design patterns, and best practices. In this course, we learn how to analyze requirements, design robust architectures, implement clean code, and test software systems effectively. The collaborative environment encourages students to work on real-world projects, preparing them for future careers in the tech industry. The instructors bring industry experience to the classroom, offering valuable insights beyond theoretical knowledge.",
      images: ["/pic (1).jpeg"]
    },
    {
      id: 2,
      title: "Technology Seminar: Innovations and Future Trends",
      date: "May 20, 2022",
      summary: "Participating in a technology seminar showcasing the latest innovations and future trends.",
      content: "The technology seminar brought together experts from various fields to discuss cutting-edge innovations and predict future trends in the tech industry. Topics ranged from artificial intelligence and machine learning to blockchain technology and quantum computing. Attendees had the opportunity to engage with speakers, participate in workshops, and network with professionals. The event highlighted the importance of continuous learning and adaptation in the rapidly evolving tech landscape. Students gained valuable insights into potential career paths and emerging technologies that will shape the future.",
      images: ["/pic (2).jpeg"]
    },
    {
      id: 3,
      title: "Pandemic Class Experience in WMSU",
      date: "September 10, 2021",
      summary: "Adapting to the challenges of academic life during the pandemic at WMSU.",
      content: "The pandemic transformed education at WMSU, forcing students and faculty to adapt to remote learning environments. Despite the challenges, the university community demonstrated remarkable resilience and creativity. Virtual classrooms became the norm, with professors leveraging digital tools to deliver engaging content. Students developed new study habits and time management skills to succeed in this unfamiliar setting. While the lack of face-to-face interaction was difficult, it also fostered independence and self-discipline. The experience highlighted both the limitations and possibilities of technology-mediated education during extraordinary circumstances.",
      images: ["/pic (3).jpeg"]
    },
    {
      id: 4,
      title: "Post-Pandemic Online Classes at WMSU",
      date: "February 5, 2023",
      summary: "Transitioning to a hybrid learning model as we emerge from the pandemic.",
      content: "As the world began to recover from the pandemic, WMSU implemented a hybrid learning model that combined the best aspects of online and in-person education. This approach offered flexibility while gradually reintroducing the benefits of face-to-face interaction. Students appreciated the option to attend lectures remotely when necessary, while also having opportunities for hands-on learning and collaborative projects on campus. Faculty members refined their teaching methods, incorporating digital tools that proved effective during remote learning. This evolution in education delivery reflects a broader shift in how institutions approach learning in the post-pandemic era.",
      images: ["/pic (4).jpeg"]
    },
    {
      id: 5,
      title: "COVID-19 Impact on Zamboanga Town",
      date: "July 18, 2021",
      summary: "Documenting the effects of the pandemic on daily life in Zamboanga.",
      content: "The COVID-19 pandemic significantly altered life in Zamboanga Town, affecting everything from public health to economic activities and social interactions. Local businesses faced unprecedented challenges, with many forced to close temporarily or permanently. Community members demonstrated solidarity by supporting vulnerable populations and essential workers. Public spaces emptied as lockdown measures were implemented, creating an eerie atmosphere in once-bustling areas. Healthcare workers became the frontline heroes, working tirelessly to care for the sick. Despite the hardships, the pandemic also revealed the resilience and adaptability of Zamboanga's residents as they navigated this global crisis together.",
      images: ["/pic (5).jpeg"]
    },
    {
      id: 6,
      title: "Opening Ceremony of WMSU Palaro",
      date: "November 12, 2023",
      summary: "Celebrating the kickoff of WMSU's annual sports festival with vibrant performances and school spirit.",
      content: "The opening ceremony of WMSU Palaro was a spectacular display of school spirit and athletic pride. Students from different colleges paraded in their respective colors, showcasing unity and friendly competition. The event featured cultural performances, including traditional dances and musical numbers that highlighted the rich heritage of the region. University officials delivered inspiring speeches, emphasizing the importance of sportsmanship and holistic development. The lighting of the Palaro flame symbolized the official start of the games, generating excitement among participants and spectators alike. This annual tradition brings together the entire university community in celebration of physical fitness, talent, and camaraderie.",
      images: ["/pic (6).jpeg"]
    },
    {
      id: 7,
      title: "WMSU Palaro Week: Competitions and Celebrations",
      date: "November 18, 2023",
      summary: "A week of intense competitions, team spirit, and memorable moments during the university's sports festival.",
      content: "WMSU Palaro Week transformed the campus into a vibrant arena of athletic competitions and spirited celebrations. Students competed in various sports, from basketball and volleyball to swimming and track events, showcasing their talents and determination. The stands were filled with enthusiastic supporters, creating an electric atmosphere with chants and cheers for their respective colleges. Beyond the competitions, the week featured mini-events, food stalls, and evening programs that fostered a sense of community. The friendly rivalries on the field strengthened bonds between students from different programs, creating memories that will last long after graduation. Palaro Week exemplifies the university's commitment to developing well-rounded individuals who excel both academically and physically.",
      images: ["/pic (7).jpeg"]
    }
  ]

  const handleCardClick = (post) => {
    setSelectedPost(post)
  }

  const handleBackClick = () => {
    setSelectedPost(null)
  }

  return (
    <div className="blog-container">
      <div className="section-header">
        <h2 className="glitch-text" data-text="Blog_Posts.exe">Blog_Posts.exe</h2>
        <div className="tech-line"></div>
      </div>

      {selectedPost ? (
        <div className="blog-post-full">
          <button className="back-button" onClick={handleBackClick}>
            <span className="terminal-prompt">$</span> Back to all posts
          </button>
          <div className="post-header">
            <h3 className="post-title">{selectedPost.title}</h3>
            <span className="post-date">{selectedPost.date}</span>
          </div>
          <div className="post-content">
            <p>{selectedPost.content}</p>
          </div>
          <div className="post-images">
            {selectedPost.images.map((image, index) => (
              <div className="post-image-container" key={index}>
                <div className="image-frame">
                  <img src={image} alt={`${selectedPost.title} - image ${index + 1}`} />
                  <div className="frame-corner top-left"></div>
                  <div className="frame-corner top-right"></div>
                  <div className="frame-corner bottom-left"></div>
                  <div className="frame-corner bottom-right"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="blog-grid">
          {blogPosts.map(post => (
            <div className="blog-card" key={post.id} onClick={() => handleCardClick(post)}>
              <div className="card-header">
                <h3 className="card-title">{post.title}</h3>
                <span className="card-date">{post.date}</span>
              </div>
              <div className="card-content">
                <p>{post.summary}</p>
              </div>
              <div className="card-footer">
                <button className="read-more">
                  <span className="terminal-prompt">$</span> Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Blog
