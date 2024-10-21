import React from 'react';
import { Box, VStack, Heading, Text, Container, Link, UnorderedList, ListItem } from '@chakra-ui/react';

const PrivacyPolicy = () => {
    return (
        <Container maxW="container.md" py={8}>
            <VStack spacing={6} align="stretch">
                <Heading as="h1" size="xl" textAlign="center">
                    Codainer AI LLC Privacy Policy
                </Heading>

                <Text fontWeight="bold">Effective Date: March 21, 2024 </Text>

                <Box>
                    <Heading as="h2" size="lg" mb={2}>
                        Welcome to Codainer AI
                    </Heading>
                    <Text>
                        At Codainer AI LLC, we believe in making technology work for you while respecting your privacy.
                        This policy explains how we handle your information when you use our AI-powered products and services.
                    </Text>
                </Box>

                <Box>
                    <Heading as="h2" size="lg" mb={2}>
                        Information We Collect
                    </Heading>
                    <Text>We collect information that helps us provide and improve our services:</Text>
                    <UnorderedList pl={5} mt={2}>
                        <ListItem><strong>Basic Info:</strong> Things like your name and email address when you create an account.</ListItem>
                        <ListItem><strong>How You Use Our Products:</strong> We learn from how you interact with our AI tools to make them better for you.</ListItem>
                        <ListItem><strong>AI-Created Content:</strong> When you use our AI services, we may store the content it generates for you.</ListItem>
                    </UnorderedList>
                </Box>

                <Box>
                    <Heading as="h2" size="lg" mb={2}>
                        How We Use Your Information
                    </Heading>
                    <Text>We use your information to:</Text>
                    <UnorderedList pl={5} mt={2}>
                        <ListItem>Provide you with awesome AI products and services</ListItem>
                        <ListItem>Keep in touch about updates or issues</ListItem>
                        <ListItem>Process payments (but we never store full credit card details)</ListItem>
                        <ListItem>Improve our AI to serve you better</ListItem>
                        <ListItem>Comply with laws and keep things running smoothly</ListItem>
                    </UnorderedList>
                </Box>

                <Box>
                    <Heading as="h2" size="lg" mb={2}>
                        Keeping Your Information Safe
                    </Heading>
                    <Text>
                        Your trust is important to us. We use up-to-date security measures to protect your information
                        from unauthorized access or misuse.
                    </Text>
                </Box>

                <Box>
                    <Heading as="h2" size="lg" mb={2}>
                        Sharing Your Information
                    </Heading>
                    <Text>
                        We&apos;re not in the business of selling your data. We only share your information when:
                    </Text>
                    <UnorderedList pl={5} mt={2}>
                        <ListItem>You ask us to</ListItem>
                        <ListItem>We need to work with partners to provide our services</ListItem>
                        <ListItem>The law requires us to</ListItem>
                    </UnorderedList>
                </Box>

                <Box>
                    <Heading as="h2" size="lg" mb={2}>
                        Your Choices
                    </Heading>
                    <Text>You&apos;re in control. You can:</Text>
                    <UnorderedList pl={5} mt={2}>
                        <ListItem>Access the information we have about you</ListItem>
                        <ListItem>Ask us to correct or delete your data</ListItem>
                        <ListItem>Opt out of marketing communications</ListItem>
                    </UnorderedList>
                </Box>

                <Box>
                    <Heading as="h2" size="lg" mb={2}>
                        Changes to This Policy
                    </Heading>
                    <Text>
                        If we make significant changes to this policy, we&apos;ll let you know by email or through our website.
                    </Text>
                </Box>

                <Box>
                    <Heading as="h2" size="lg" mb={2}>
                        Let&apos;s Talk
                    </Heading>
                    <Text>Have questions or concerns? We&apos;re here to help:</Text>
                    <Text mt={2}>
                        Codainer AI LLC<br />
                        3015 Stadium Drive
                        Columbus, OH 43202
                        Apt#4
                        <br />
                        Email: mazen@codainer.com<br />
                    </Text>
                </Box>

                <Text>
                    Thank you for trusting Codainer AI with your information. We&apos;re committed to using AI responsibly
                    and keeping your data safe.
                </Text>
            </VStack>
        </Container>
    );
};

export default PrivacyPolicy;